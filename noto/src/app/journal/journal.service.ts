import {Entry} from "./entry.model";
import {Subject} from "rxjs/Subject";

export class JournalService {

  entriesChanged = new Subject<Entry[]>();

  private entries: Entry[] = [
    new Entry("1",
      (new Date(Date.now())),
      "Today was fun.",
      "https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"),
    new Entry("2",
      (new Date(Date.now())),
      "Today was really fun.",
      "https://media1.popsugar-assets.com/files/thumbor/lvGXyybYh6-ZMmcO0-souYZRLBg/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/22/988/n/1922283/052079922686ef54_Draco-Malfoy-Wallpaper-draco-malfoy-25676685-1024-768.jpg")
  ];

  getEntries() {
    return this.entries.slice();
  }

  getEntry(id: number) {
    return this.entries.slice()[id];
  }

  addEntry(entry: Entry) {
    this.entries.push(entry);
    this.entriesChanged.next(this.entries.slice());
  }

  updateEntry(index: number, newEntry: Entry) {
    this.entries[index] = newEntry;
    this.entriesChanged.next(this.entries.slice());
  }

  deleteEntry(index: number) {
    this.entries.splice(index, 1);
    this.entriesChanged.next(this.entries.slice());
  }

}
