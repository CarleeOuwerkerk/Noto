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

  private entries: Entry[] = [
    // new Entry("1",
    //   // (new Date()),
    //   // new Date("2015-03-25")
    //   // new Intl.DateTimeFormat(),
    //   new Date("2015-03-27"),
    //   // new Date('December 17, 1995 03:24:00'),
    //   // moment().startOf('week'),
    //   // (new Date(Date.now())),
    //   "Harry Potter",
    //   "Today was fun.",
    //   ["https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
    //     "https://uvmbored.com/wp-content/uploads/2015/08/harrypotter.jpg"]),
    // new Entry("2",
    //   new Date("Mar 25 2015"),
    //   "Draco Malfoy",
    //   "Today was really fun.",
    //   ["https://media1.popsugar-assets.com/files/thumbor/lvGXyybYh6-ZMmcO0-souYZRLBg/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/22/988/n/1922283/052079922686ef54_Draco-Malfoy-Wallpaper-draco-malfoy-25676685-1024-768.jpg"]),
    // new Entry("3",
    //   new Date(Date.now()),
    //   "Severus Snape",
    //   "Today was the best.",
    //   ["https://i1.wp.com/images4.fanpop.com/image/photos/15700000/Snape-severus-snape-15700150-640-480.jpg"]),
    // new Entry("4",
    //   new Date(Date.now()),
    //   "WEEK ONE - Planning the App",
    //   "Between work, the first week of new classes, homework, Society of Women Engineers meetings, and being sick, it was really difficult to find the time I needed to work on my Senior Project.  But my goal was ten hours, and I made that happen (almost half of that time may have been from Saturday afternoon).  \n" +
    //   "\n" +
    //   "This week was all about design.  I, along with the help of others, came up with a list of user requirements.  There were so many ideas and so many neat things I could incorporate into my app, but I had to be selective--at least at this point in the course.  I tend to give myself more work that I should, and I'm really trying to pace myself with this project, so I picked a few important features to work on.  If I finish these easily and long before the deadline, I will consider adding more.  \n" +
    //   "\n" +
    //   "I looked into various software I could use.  I wasn't sure if I should create a web app or a mobile app.  But I knew I wanted this to be available from any device, and I recognized how much extra work it would require to create a native Android app (and additional time I would need to spend!).  For now, this will be a web app.  My plan is to deploy it through Amazon Web Services.  As for software, I ensured WebStorm was ready to go. \n" +
    //   "\n" +
    //   "I spent a great portion of my time sketching wireframes.  I find front-end development tedious sometimes--especially when I'm creating something on the spot, so I really wanted detailed diagrams of what my app would look like. \n" +
    //   "\n" +
    //   "I also took time to sketch a rough diagram of the components this project would require.  The more time you spend effectively planning, the easier the development process is.  \n" +
    //   "\n" +
    //   "Lastly, I spent an hour or so getting this blog up and running.  I thought this was a requirement, but it turns out it's not.  It will still be an effective tool to document my progress.",
    //   ["https://static.wixstatic.com/media/f77b93_91f4ca3c9eb64620b2f20a9a9929afc1~mv2.png/v1/fit/w_925,h_569,al_c,q_80/file.png"]),
    // new Entry("5",
    //   new Date(Date.now()),
    //   "WEEK TWO - Creating the UI, Part I",
    //   "My goal this week was to spend fifteen hours on my project, and, somehow, that happened (plus an extra half hour).  I spent three hours each day working on the UI of my app.  That may not sound like a lot of time, but it adds up (especially with 10 credits and work): essentially I had no life this week.  \n" +
    //   "\n" +
    //   "As mentioned, the focus this week was on the user interface of my app.  This next week is set aside for the same.  \n" +
    //   "\n" +
    //   "I started by finally creating the project in WebStorm, adding Bootstrap to it, and creating the preliminary components.  Except for a few things, the very basic functionality is working now.  I created a directive for my header's dropdown, relearnt how to pass data between components using Event Emitters and services.    \n" +
    //   "\n" +
    //   "I've created the project on GitHub.  Here's the link if you'd like to follow along: github.com/CarleeOuwerkerk/Noto.git\n" +
    //   "\n" +
    //   "I spent a couple hours fumbling through Photoshop to create a logo, which actually turned out well.  The only thing is I can't get my HTML to display it--so frustrating!  If I use CSS to make it the background of a div, it works, but that's not what I want.  I just don't understand, but sometimes you have to take a break from things in the development process or else you'll go crazy (or at least threaten to change your major, which may have happened this week).  If anyone is reading this and understands the problem and solution, please, help me out.  \n" +
    //   "\n" +
    //   "This is far from what my app will look like in the end, but this is where I'm at now. (The Harry Potter pictures were purely for my entertainment.)",
    //   ["https://static.wixstatic.com/media/f77b93_593c0882403e4790a5186a7807a2b3a0~mv2.png/v1/fit/w_740,h_368,al_c,q_80/file.png"]),
    // new Entry("6",
    //   new Date(Date.now()),
    //   "WEEK THREE - Creating the UI, Part 2",
    //   "What a weird week.  My goal was to spend 15 hours again this week, but I only managed 11 hours and 15 minutes.  \n" +
    //   "\n" +
    //   "Monday, Wednesday, and Friday were great, but, on Tuesday, my husband and I drove to Utah to see The Wombats in concert.  We got all the way down there to find that the show had been cancelled.  So we drove seven hours for nothing.  We got home late, and I had no time to work on the project.  \n" +
    //   "\n" +
    //   "Thursday wasn't much better.  After work I had to set up and attend the opening social for the society I'm a treasurer for.  I got home a little later than I'd have liked, went to start my project, and the power went out!  For four hours.  I did what I could, but I really needed the internet.  And to charge my laptop.  \n" +
    //   "\n" +
    //   "All things considered, 11 hours was pretty amazing.\n" +
    //   "\n" +
    //   "I spent this week making mostly small changes to the app.  I changed the way navigation occurred; integrated *ngForm so the journal entries could be edited and added; created delete functionality, got my logo to work (finally!); created the components for the Throwback page.  I'm happy with how it's coming along.\n" +
    //   "\n" +
    //   "Next week will be tricky.  I'm going to be designing how I want the data stored, and I'll be creating the database.  I don't hate working with databases, but I've had some pretty bad experiences with them throughout my college career.  I'm worried I'll have to redo it if I decide to change my model in a month or two.  But I suppose that's the fun of the Senior Project, right?",
    //   ["https://static.wixstatic.com/media/f77b93_558de6c454b2490fb8a494763aa96c2f~mv2.png/v1/fit/w_925,h_447,al_c,q_80/file.png"]),
    // new Entry("7",
    //   new Date(Date.now()),
    //   "WEEK FOUR - Model, Custom Scrollbar, & Login",
    //   "I feel like I'm really starting to make progress, but there are still so many things I need to do.  This week I spent another 15 hours on my project.  \n" +
    //   "\n" +
    //   "My goal was to design the database and to research what kind of database would be best.  That didn't even take me an hour, so I had plenty of time to work on the UI a little more, which was much needed.  \n" +
    //   "\n" +
    //   "I ran into a lot of errors and problems with almost everything I worked on, but I was able to figure everything out in the end.  That's such a good feeling in programming: when your code finally works.  \n" +
    //   "\n" +
    //   "I created new components for the login and signup pages.  They aren't functional yet, but I think they look pretty much how they will in the end.  I ran into some problems with centreing (yes, I spell that like a Canadian), but I was able to find a workaround.  I adjusted the header a little more to accommodate these new features and made plans for how I want to implement authenticated and unauthenticated header views.  On Wednesday I spent a lot of time researching possibilities for my app.  I looked into maps, custom scrollbars, load-more functionality.  I revised a lot of the CSS for the buttons.  The hover colour had been annoying me.  \n" +
    //   "\n" +
    //   "During the last few days, I created a new custom filter pipe that formatted how the entry items would look and started implementing a calendar date selector type thing.  The thing I did that I was most proud of this week, happened yesterday when I created my own custom scrollbar to match the aesthetic of my app.  It took some time and error fixing, but I love it. ",
    //   ["https://static.wixstatic.com/media/f77b93_8a0c8800a9064e90bf61aa2078624fe5~mv2.png/v1/fit/w_350,h_473,al_c,q_80/file.png"]),
  ];

  initEntries() {
    const token = this.authService.getToken();

    this.http.get('https://noto-a9051.firebaseio.com/entries.json?auth=' + token)
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
    this.http.put('https://noto-a9051.firebaseio.com/entries.json?auth=' + token,
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
