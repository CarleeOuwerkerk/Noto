import {Component, OnInit} from '@angular/core';
import {Entry} from "../entry.model";
import {JournalService} from "../journal.service";

@Component({
  selector: 'noto-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit{

  // @Output() entrySelected = new EventEmitter<Entry>();
  entries: Entry[];

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.entries = this.journalService.getEntries();
  }

  // onEntrySelected(entry: Entry){
  //   this.entrySelected.emit(entry);
  // }

}
