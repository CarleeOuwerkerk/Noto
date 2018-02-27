import {Injectable, EventEmitter} from "@angular/core";
import {Entry} from "./entry.model";
import {Subject} from "rxjs/Subject";
// import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
import {Http, Response, Headers} from "@angular/http";
import {AuthService} from "../startup/auth.service";

@Injectable()
export class JournalService {

  entriesChangedEvent = new EventEmitter();
  entriesChanged = new Subject<Entry[]>();

  constructor(private http: Http,
              private authService: AuthService
              // private http: HttpClient
  ) {
    this.initEntries();
  }

  private entries: Entry[] = [];

  initEntries() {
    const token = this.authService.getToken();

    this.http.get('https://noto-a9051.firebaseio.com/' + this.authService.getUID() + '.json?auth=' + token)
    // this.http.get('https://noto-a9051.firebaseio.com/entries.json?auth=' + token)
      .subscribe(
        (response: Response) => {
          const entries: Entry[] = response.json();
          this.entries = entries;
          this.entriesChanged.next(this.entries.slice());
        }
      );
    // .map(
    //   (response: Response) => {
    //     const entries: any = response.json;
    //     return entries;
    //   }
    // )
    // .subscribe(
    //   (entries: Entry[]) => {
    //     this.entries = entries;
    //     this.entriesChangedEvent.next(this.entries.slice());
    //   }
    //   );
  }

  getEntries() {
    return this.entries.slice();
  }

  getEntry(id: number) {
    return this.entries.slice()[id];
  }

  addEntry(entry: Entry) {
    // const strEntry = JSON.stringify(entry);
    // this.http.post('https://noto-a9051.firebaseio.com/entries.json', strEntry)
    //   .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   );
    this.entries.push(entry);
    this.entries = this.entries.sort(this.sortEntries);
    // this.entriesChanged.next(this.entries.slice());
    this.storeEntries();
  }

  updateEntry(index: number, newEntry: Entry) {
    // const strEntry = JSON.stringify(newEntry);
    // this.http.patch('https://noto-a9051.firebaseio.com/entries.json', strEntry)
    //   .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   );
    this.entries[index] = newEntry;
    this.entries = this.entries.sort(this.sortEntries);
    // this.entriesChanged.next(this.entries.slice());
    this.storeEntries();
  }

  deleteEntry(entry: Entry, index: number) {
    // this.http.delete('https://noto-a9051.firebaseio.com/entries.json', entry)
    //   .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   );
    this.entries.splice(index, 1);
    this.entries = this.entries.sort(this.sortEntries);
    // this.entriesChanged.next(this.entries.slice());
    this.storeEntries();
  }

  getRandomID() {
    let randomEntry = this.entries[Math.floor(Math.random() * this.entries.length)];
    return (+randomEntry.id - 1);
  }

  sortEntries(entryA: Entry, entryB: Entry) {
    if (entryA.date > entryB.date) {
      return -1;
    }
    else if (entryA.date < entryB.date) {
      return 1;
    }
    else {
      return 0;
    }
  }

  storeEntries() {
    const token = this.authService.getToken();

    const headers = new Headers({'Content-Type': 'application/json'});
    // this.http.put('https://noto-a9051.firebaseio.com/entries.json?auth=' + token,
    this.http.put('https://noto-a9051.firebaseio.com/' + this.authService.getUID() + '.json?auth=' + token,
      this.getEntries(),
      {headers})
    // JSON.stringify(this.entries)
      .subscribe(
        () => {
          this.entriesChanged.next(this.entries.slice());
        }
      )
  }

}
