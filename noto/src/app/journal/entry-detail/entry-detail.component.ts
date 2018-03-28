import {Component, OnInit} from '@angular/core';
import {Entry} from "../entry.model";
import {JournalService} from "../journal.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'noto-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  entry: Entry;
  id: number;

  constructor(private journalService: JournalService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.entry = this.journalService.getEntry(this.id);
        }
      );
  }

  onEditEntry() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteEntry() {
    this.journalService.deleteEntry(this.entry, this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
