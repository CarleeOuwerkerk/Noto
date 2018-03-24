//   private initForm() {
//     let entryDate;
//     let entryTitle = '';
//     let entryText = '';
//     let images = [];
//
//     if (this.editMode) {
//       const entry = this.journalService.getEntry(this.id);
//       entryDate = entry.date;
//       entryTitle = entry.title;
//       entryText = entry.text;
//       images = entry.images;
//
//       // for (let image of entry.imageURL){
//       //   entryImages.push(image);
//       // }
//
//
//       // if (entry['imageURL']) {
//       //   for (let image of entry.imageURL) {
//       //     entryImages.push(
//       //       new FormGroup({
//       //         'url': new FormControl(image.imageURL)
//       //       })
//       //     );
//       //   }
//       // }
//
//       // entryImages = entry.imageURL;
//       //
//       // if (entry['images']) {
//       //   for (let image of entry.imageURL) {
//       //     entryImages.push(
//       //       new FormGroup({
//       //         'imageURL': new FormControl(entry.imageURL, Validators.required)
//       //       })
//       //     );
//       //   }
//       // }
//
//     }
//
//     this.entryForm = new FormGroup({
//       'date': new FormControl(entryDate, Validators.required),
//       'title': new FormControl(entryTitle),
//       'text': new FormControl(entryText, Validators.required),
//       'images': new FormControl(images)
//     });
//   }
//
//   onSubmit() {
//     // const newEntry = new Entry(
//     //   this.entryForm.value['date'],
//     //   this.entryForm.value['text'],
//     //   this.entryForm.value['imageURL']);
//     //   // this.entryForm.value['images']
//
//     if (this.editMode) {
//       this.journalService.updateEntry(this.id, this.entryForm.value);
//     }
//     else {
//       this.journalService.addEntry(this.entryForm.value);
//     }
//     this.onCancel();
//   }
//
//   addImage(url: string){
//     this.entry.images.push(url);
//   }
// }

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {JournalService} from "../journal.service";
import {Entry} from "../entry.model";
import {IMyDate, IMyDateModel, IMyDpOptions} from 'mydatepicker';
import {PromptService} from "../prompt.service";

@Component({
  selector: 'noto-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css'],
})
export class EntryEditComponent implements OnInit {

  id: number;
  editMode = false;
  entryForm: FormGroup;
  entry: Entry = null;
  journalPrompt: string = "";
  date: Date = new Date();
  test = {
    year: this.date.getFullYear(),
    month: (this.date.getMonth() + 1),
    day: (this.date.getDate() + 1)
  };

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    firstDayOfWeek: "su",
    disableDateRanges: [{
      begin: {
        year: this.date.getFullYear(),
        month: (this.date.getMonth() + 1),
        day: (this.date.getDate() + 1)
      }, end: {year: 3000, month: 11, day: 20}
    }],
  };

  public selDate: IMyDate = this.test;
    // {year: 0, month: 0, day: 0};

  // dateModel: any = {start_date: new Date()}


  constructor(private route: ActivatedRoute,
              private journalService: JournalService,
              private router: Router,
              private promptService: PromptService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = (params['id'] != null);
          this.initForm();
        }
      );

    // this.entry = this.journalService.getEntry(this.id);
  }

  private initForm() {
    let entryDate;

    // let d: Date = new Date();
    // this.selDate = {year: d.getFullYear(),
    //   month: d.getMonth() + 1,
    //   day: d.getDate()};

    let entryTitle = '';
    let entryText = '';
    let entryImages = new FormArray([]);

    if (this.editMode) {
      this.entry = this.journalService.getEntry(this.id);
      const entry = this.journalService.getEntry(this.id);
      entryDate = entry.date;

      // let d: Date = new Date();
      // this.selDate = {year: entry.date.getFullYear(),
      //   month: entry.date.getMonth() + 1,
      //   day: entry.date.getDate()};

      // console.log(entryDate.date);
      // entryDate.date;

      // this.selDate = {year: 1,
      //   month: 1,
      //   day: 1};
      this.selDate = entryDate;

      entryTitle = entry.title;
      entryText = entry.text;
      if (entry['images']) {
        for (let image of entry.images) {
          entryImages.push(
            new FormGroup({
              'description': new FormControl(image.description),
              'url': new FormControl(image.url)
            })
          );
        }
      }
    }

    this.entryForm = new FormGroup({
      'date': new FormControl(entryDate, Validators.required),
      'title': new FormControl(entryTitle),
      'text': new FormControl(entryText, Validators.required),
      'images': entryImages
    });

    // this.entryForm.patchValue({date: this.entry.date});
    // this.entryForm.setValue({date: this.entry.date});
    // this.entryForm.value.date.setValue(this.entry.date);
    // this.entryForm.setValue(this.entry.date);
  }

  onSubmit() {
    const values = this.entryForm.value;
    const newEntry = new Entry("1", values.date.formatted, values.title, values.text, values.images);

    if (this.editMode) {
      this.journalService.updateEntry(this.id, newEntry);
    }
    else {
      this.journalService.addEntry(newEntry);
    }
    this.onCancel();
  }

  onDeleteEntry() {
    if (!this.editMode) {
      return;
    }
    this.journalService.deleteEntry(this.entry, this.id);
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddImage(){
    (<FormArray>this.entryForm.get('images')).push(
      new FormGroup({
        'description': new FormControl(),
        'url': new FormControl()
      })
    )
  }

  onDeleteImage(index: number){
    (<FormArray>this.entryForm.get('images')).removeAt(index);
  }

  // setDate(): void {
  //   this.entryForm.patchValue({myDate: {
  //     date: {
  //       year: this.entry.date.getFullYear(),
  //       month: this.entry.date.getMonth() + 1,
  //       day: this.entry.date.getDate()}
  //   }});
  // }

  onGetPrompt(){
    this.journalPrompt = this.promptService.getPrompt();
  }

  onDateChanged(event: IMyDateModel) {
    // Update value of selDate variable
    this.selDate = event.date;
  }

  // Calling this function clears the selected date
  clearDate() {
    this.selDate = null;
  }

}
