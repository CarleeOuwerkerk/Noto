import {Entry} from "./entry.model";
import {Subject} from "rxjs/Subject";
import {EventEmitter} from "@angular/core";

export class JournalService {

  entriesChangedEvent = new EventEmitter()
  entriesChanged = new Subject<Entry[]>();

  private entries: Entry[] = [
    new Entry("1",
      (new Date(Date.now())),
      "Today was fun.",
      "https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"),
    new Entry("2",
      (new Date(Date.now())),
      "Today was really fun.",
      "https://media1.popsugar-assets.com/files/thumbor/lvGXyybYh6-ZMmcO0-souYZRLBg/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/22/988/n/1922283/052079922686ef54_Draco-Malfoy-Wallpaper-draco-malfoy-25676685-1024-768.jpg"),
    new Entry("3",
      (new Date(Date.now())),
      "Today was the best.",
      "https://i1.wp.com/images4.fanpop.com/image/photos/15700000/Snape-severus-snape-15700150-640-480.jpg")
  ];

  getEntries() {
    return this.entries.slice();
  }

  getEntry(id: number) {
    return this.entries.slice()[id];
  }

  addEntry(entry: Entry) {
    this.entries.push(entry);
    this.entries = this.entries.sort(this.sortEntries);
    this.entriesChanged.next(this.entries.slice());
  }

  updateEntry(index: number, newEntry: Entry) {
    this.entries[index] = newEntry;
    this.entries = this.entries.sort(this.sortEntries);
    this.entriesChanged.next(this.entries.slice());
  }

  deleteEntry(index: number) {
    this.entries.splice(index, 1);
    this.entries = this.entries.sort(this.sortEntries);
    this.entriesChanged.next(this.entries.slice());
  }

  getRandomID() {
    let randomEntry = this.entries[Math.floor(Math.random() * this.entries.length)];
    return (+randomEntry.id - 1);
  }

  sortEntries(entryA: Entry, entryB: Entry){
    if (entryA.date > entryB.date){
      return -1;
    }
    else if (entryA.date < entryB.date){
      return 1;
    }
    else {
      return 0;
    }
  }

}
