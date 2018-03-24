import {Component, Input, OnInit} from '@angular/core';
import {Entry} from "../entry.model";

@Component({
  selector: 'noto-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {

  @Input() entry: Entry;
  @Input() index: number;
  entrySample: string = "";

  // constructor(private journalService: JournalService) { }

  ngOnInit() {
    if (this.entry.title) {
      this.entrySample = this.entry.title;
    }
    else {
      this.entrySample = this.entry.text;
    }
  }

}
