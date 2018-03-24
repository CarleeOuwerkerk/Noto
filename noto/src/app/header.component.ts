import {Component, OnInit} from '@angular/core';
import {AuthService} from "./startup/auth.service";

@Component({
  selector: 'noto-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated: boolean = true;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  // onSelect(page: string){
  //   this.pageSelected.emit(page);
  // }

  onLogout(){
    this.authService.logoutUser();
  }

}
