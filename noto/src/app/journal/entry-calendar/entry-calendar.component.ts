import {Component, OnInit} from '@angular/core';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import {JournalService} from "../journal.service";
import {Entry} from "../entry.model";
import {ActivatedRoute, Router} from "@angular/router";
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'noto-entry-calendar',
  templateUrl: './entry-calendar.component.html',
  styleUrls: ['./entry-calendar.component.css']
})
export class EntryCalendarComponent implements OnInit {

  selectedDate: String = null;
  entries: Entry[] = null;
  index: number = null;
  // date: Date = new Date();

  myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm/dd/yyyy',
    inline: true,
    selectorWidth: "100%",
    // disableDateRanges: [{
    //   begin: {
    //     year: this.date.getFullYear(),
    //     month: (this.date.getMonth() + 1),
    //     day: (this.date.getDate() + 1)
    //   }, end: {year: 3000, month: 11, day: 20}
    // }],
  };

  constructor(private journalService: JournalService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    this.selectedDate = event.formatted;
    // this.filteredEntries = null;
    // this.filterEntries();
    this.entries = this.journalService.getEntries();
  }

  // filterEntries(){
  //   let entries = this.journalService.getEntries();
  //
  //   for (let entry of entries){
  //     if (entry.date.toString() == this.selectedDate){
  //       this.filteredEntries = this.filteredEntries || [];
  //       this.filteredEntries.push(entry);
  //     }
  //   }
  // }

  onNewEntry() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
