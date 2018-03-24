import { Component, OnInit } from '@angular/core';
import {JournalService} from "../journal/journal.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'noto-throwback',
  templateUrl: './throwback.component.html',
  styleUrls: ['./throwback.component.css']
})
export class ThrowbackComponent implements OnInit {

  randomID: number;

  constructor(private journalService: JournalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getRandomEntry(){
    this.randomID = this.journalService.getRandomID();
    if (this.randomID == null){
      return;
    }
    this.displayRandomEntry();
  }

  displayRandomEntry() {
    this.router.navigate([this.randomID], {relativeTo: this.route});
  }

}
