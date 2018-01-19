import { Component, OnInit } from '@angular/core';
import {Entry} from "./entry.model";

@Component({
  selector: 'noto-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  selectedEntry: Entry;

  constructor() { }

  ngOnInit() {
  }

}
