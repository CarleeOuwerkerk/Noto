import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthService {

  token: string;

  // //new
  // private authState: any;

  constructor(private router: Router,

              // //new
              // public afAuth: AngularFireAuth
  ){

    // //new
    // this.afAuth.authState.subscribe((auth) => {
    //   this.authState = auth
    // });

  }

  signupUser(first: string, last: string, email: string, pass: string) {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .catch(
        error => console.log(error)
      );
    // this.loginUser(email, pass);
    this.router.navigate(['login']);
  }

  loginUser(email:string, pass: string): any {
    // let test = true;

    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(
        response => {
          this.router.navigate(['/journal']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              // firebase.auth().setPersistence()
              console.log(response);
              // if (response != null) {
              //   test = true;
              // }
              }
            )
        }
      )
      .catch(
        error => {
          let errorMessage = error.message;
          // return errorMessage;
          alert(errorMessage);
          // console.log(error);

          // if (error != null)
          // {
          //   // test = false;
          //   return error;
          // }

          // if (!this.isAuthenticated())
          // {
          //   return false;
          // }
        }
        // firebase.auth().
      );
    // return test;
  }

  getUID(){
    return firebase.auth().currentUser.uid;
  }

  logoutUser(){
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/login']);
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  // //new
  // get authenticated(): boolean {
  //   return this.authState !== null;
  // }
  //
  // //new
  // get user(): any {
  //   return this.authenticated ? this.authState : null;
  // }

}
