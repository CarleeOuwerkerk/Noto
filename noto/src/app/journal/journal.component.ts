import { Component, OnInit } from '@angular/core';
// import {Entry} from "./entry.model";
import {JournalService} from "./journal.service";

@Component({
  selector: 'noto-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  // selectedEntry: Entry;

  constructor(
    // private journalService: JournalService
  ) { }

  ngOnInit() {
    // this.journalService.entrySelected
    //   .subscribe(
    //     (entry: Entry) => {
    //       this.selectedEntry = entry;
    //     }
    //   )
  }

}
