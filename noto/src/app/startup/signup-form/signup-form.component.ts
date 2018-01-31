import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'noto-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let last = '';
    let first = '';
    let email = '';
    let username = '';
    let password = '';

    this.loginForm = new FormGroup({
      'email': new FormControl(email, Validators.required),
      'last': new FormControl(last, Validators.required),
      'first': new FormControl(first, Validators.required),
      'username': new FormControl(username, Validators.required),
      'password': new FormControl(password, Validators.required)
    });
  }

  onSubmit() {

  }

}
