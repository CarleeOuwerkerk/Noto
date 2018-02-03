import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'noto-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  // onSelect(page: string){
  //   this.pageSelected.emit(page);
  // }

}
