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
  authWorked: boolean = true;

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
    // let error = this.authService.loginUser(email, password);
    this.authService.loginUser(email, password);

    // console.log(error);
    // console.log(error);
    // {
    //   this.authWorked = false;
    // };
    // setTimeout(this.authService.loginUser(email, password), 500000);
    // if (!this.authService.isAuthenticated()) {
    //   this.authWorked = false;
    // }
    // if (!this.authService.loginUser(email, password))
    // {
    //   this.authWorked = false;
    // }

  }

}
