import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Entry} from "../entry.model";

@Component({
  selector: 'noto-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {

  @Input() entry: Entry;
  @Output() entrySelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.entrySelected.emit();
  }

}
