import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'noto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'noto';
  loadedPage = 'journal';

  onNavigate(page: string){
    this.loadedPage = page;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDrVK0S3Px2wgEJAHFjvIjoNt_eOXjM_U8",
      authDomain: "noto-a9051.firebaseapp.com"
    })
  }
}
