import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

/*
  Generated class for the FirebaseAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseAuthProvider {
  private user: firebase.User;
  constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }

  signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }
  
  
  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, "Asdf1234");
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  getUserEmail(){
    return this.user.email;
  }

}
