import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'noto-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let last = '';
    let first = '';
    let email = '';
    // let username = '';
    let password = '';

    this.signupForm = new FormGroup({
      'email': new FormControl(email, Validators.required),
      'last': new FormControl(last, Validators.required),
      'first': new FormControl(first, Validators.required),
      // 'username': new FormControl(username, Validators.required),
      'password': new FormControl(password, Validators.required)
    });
  }

  onSignup(form: NgForm) {
    const first = form.value.first;
    const last = form.value.last;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(first, last, email, password);
    // setTimeout(function() {this.authService.signupUser(first, last, email, password)}, 5000);
    // this.authService.loginUser(email, password);
  }

}
