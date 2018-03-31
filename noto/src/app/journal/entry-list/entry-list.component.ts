import {Component, OnDestroy, OnInit} from '@angular/core';
import {Entry} from "../entry.model";
import {JournalService} from "../journal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'noto-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit, OnDestroy {

  entries: Entry[] = null;
  private subscription: Subscription;
  term: String = "";
  // journalfilter: String = "";
  listView: boolean = true;

  constructor(private journalService: JournalService,
              private router: Router,
              private route: ActivatedRoute) {
    // this.entries = null;
  }

  ngOnInit() {
    this.subscription = this.journalService.entriesChanged
      .subscribe(
        (entries: Entry[]) => {
          // this.journalService.initEntries();
          this.entries = entries;
        }
      );
    this.journalService.initEntries();
    this.entries = this.journalService.getEntries();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.entries = null;
  }

  onKeyPress(value: string) {
    this.term = value;
    // this.journalfilter = value;
  }

  onNewEntry() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // openListView(){
  //   // this.listView = true;
  //   this.router.navigate(['journal'], {relativeTo: this.route});
  // }
  //
  // openCalendarView(){
  //   // this.listView = false;
  //   this.router.navigate(['calendar'], {relativeTo: this.route});
  // }

}
