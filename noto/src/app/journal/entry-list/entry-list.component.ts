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

  entries: Entry[];
  private subscription: Subscription;
  term: String = "";
  // journalfilter: String = "";

  constructor(private journalService: JournalService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.journalService.entriesChanged
      .subscribe(
        (entries: Entry[]) => {
          this.entries = entries;
        }
      );
    this.entries = this.journalService.getEntries();
  }

  onNewEntry() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onKeyPress(value: string) {
    this.term = value;
    // this.journalfilter = value;
  }

}
