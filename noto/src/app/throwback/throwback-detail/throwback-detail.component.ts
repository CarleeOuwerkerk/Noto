import { Component, OnInit } from '@angular/core';
import {Entry} from "../../journal/entry.model";
import {ActivatedRoute, Params} from "@angular/router";
import {JournalService} from "../../journal/journal.service";

@Component({
  selector: 'noto-throwback-detail',
  templateUrl: './throwback-detail.component.html',
  styleUrls: ['./throwback-detail.component.css']
})
export class ThrowbackDetailComponent implements OnInit {

  entry: Entry;
  id: number;

  constructor(private journalService: JournalService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.entry = this.journalService.getEntry(this.id);
        }
      );
  }

}
