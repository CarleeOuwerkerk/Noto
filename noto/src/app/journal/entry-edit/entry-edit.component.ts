import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {JournalService} from "../journal.service";
import {Entry} from "../entry.model";

@Component({
  selector: 'noto-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {

  id: number;
  editMode = false;
  entryForm: FormGroup;
  entry: Entry = null;

  constructor(private route: ActivatedRoute,
              private journalService: JournalService,
              private router: Router) {
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

    this.entry = this.journalService.getEntry(this.id);
  }

  private initForm() {
    let entryDate;
    let entryTitle = '';
    let entryText = '';
    let images = [];

    if (this.editMode) {
      const entry = this.journalService.getEntry(this.id);
      entryDate = entry.date;
      entryTitle = entry.title;
      entryText = entry.text;
      images = entry.images;

      // for (let image of entry.imageURL){
      //   entryImages.push(image);
      // }


      // if (entry['imageURL']) {
      //   for (let image of entry.imageURL) {
      //     entryImages.push(
      //       new FormGroup({
      //         'url': new FormControl(image.imageURL)
      //       })
      //     );
      //   }
      // }

      // entryImages = entry.imageURL;
      //
      // if (entry['images']) {
      //   for (let image of entry.imageURL) {
      //     entryImages.push(
      //       new FormGroup({
      //         'imageURL': new FormControl(entry.imageURL, Validators.required)
      //       })
      //     );
      //   }
      // }

    }

    this.entryForm = new FormGroup({
      'date': new FormControl(entryDate, Validators.required),
      'title': new FormControl(entryTitle),
      'text': new FormControl(entryText, Validators.required),
      'images': new FormControl(images)
    });
  }

  onSubmit() {
    // const newEntry = new Entry(
    //   this.entryForm.value['date'],
    //   this.entryForm.value['text'],
    //   this.entryForm.value['imageURL']);
    //   // this.entryForm.value['images']

    if (this.editMode) {
      this.journalService.updateEntry(this.id, this.entryForm.value);
    }
    else {
      this.journalService.addEntry(this.entryForm.value);
    }
    this.onCancel();
  }

  onDeleteEntry() {
    if (!this.editMode)
    {
      return;
    }
    this.journalService.deleteEntry(this.entry, this.id);
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  chooseDateTime(){
    // ('dateTimePicker1').dateTim
  }

  addImage(url: string){
    this.entry.images.push(url);
  }
}
