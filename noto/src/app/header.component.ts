import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'noto-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(page: string){
    this.pageSelected.emit(page);
  }

}
