import {Component, Input, OnInit} from '@angular/core';
import {Entry} from "../entry.model";
// import {JournalService} from "../journal.service";

@Component({
  selector: 'noto-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {

  @Input() entry: Entry;
  @Input() index: number;
  // @Output() entrySelected = new EventEmitter<void>();

  // constructor(private journalService: JournalService) { }

  ngOnInit() {
  }

  // onSelected() {
  //   // this.entrySelected.emit();
  //   this.journalService.entrySelected.emit(this.entry);
  //
  // }

}
