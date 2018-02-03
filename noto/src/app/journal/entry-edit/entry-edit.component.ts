import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JournalService} from "../journal.service";

@Component({
  selector: 'noto-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {

  id: number;
  editMode = false;
  entryForm: FormGroup;

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
  }

  private initForm() {
    let entryDate = '';
    let entryText = '';
    let entryImageURL = '';
    // let entryImages = new FormArray([]);

    if (this.editMode) {
      const entry = this.journalService.getEntry(this.id);
      entryDate = entry.date;
      entryText = entry.text;
      entryImageURL = entry.imageURL;

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
      'text': new FormControl(entryText, Validators.required),
      'imageURL': new FormControl(entryImageURL)
      // , 'images': entryImages
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
    this.journalService.deleteEntry(this.id);
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  chooseDateTime(){
    // ('dateTimePicker1').dateTim
  }
}
