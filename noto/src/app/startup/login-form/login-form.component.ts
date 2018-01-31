import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'noto-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let username = '';
    let password = '';

    this.loginForm = new FormGroup({
      'username': new FormControl(username, Validators.required),
      'password': new FormControl(password, Validators.required),
    });
  }

  onSubmit() {

  }

}
