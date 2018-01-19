import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entry} from "../entry.model";

@Component({
  selector: 'noto-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit{

  @Output() entrySelected = new EventEmitter<Entry>();

  entries: Entry[] = [
    new Entry("1",
      (new Date(Date.now())),
      "Today was fun.",
      "https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"),
    new Entry("2",
      (new Date(Date.now())),
      "Today was really fun.",
      "https://media1.popsugar-assets.com/files/thumbor/lvGXyybYh6-ZMmcO0-souYZRLBg/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/22/988/n/1922283/052079922686ef54_Draco-Malfoy-Wallpaper-draco-malfoy-25676685-1024-768.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onEntrySelected(entry: Entry){
    this.entrySelected.emit(entry);
  }

}
