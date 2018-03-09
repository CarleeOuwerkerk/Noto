import { Component, OnInit } from '@angular/core';
// import {Entry} from "./entry.model";
import {JournalService} from "./journal.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'noto-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  listView: boolean = true;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  openListView(){
    this.listView = true;
    // this.router.navigate(['journal'], {relativeTo: this.route});
  }

  openCalendarView(){
    this.listView = false;
    // this.router.navigate(['calendar'], {relativeTo: this.route});
  }

  isListView() {
    return this.listView;
  }

}
