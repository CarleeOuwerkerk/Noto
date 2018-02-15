import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'noto-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let email = '';
    let password = '';

    this.loginForm = new FormGroup({
      'email': new FormControl(email, Validators.required),
      'password': new FormControl(password, Validators.required),
    });
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password);
  }

}
