import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData: any

  constructor(
    public Auth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public afs: AngularFirestore
  ) {
    this.updateUserState();
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null) ? true : false;
  }

  updateUserState() {
    this.Auth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

  login(email: string, password: string) {
    return this.Auth.signInWithEmailAndPassword(email, password).then(() => this.updateUserState());
  }

  register(email: string, password: string) {
    return this.Auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.Auth.signOut().then(() => {
      this.userData = null;
      localStorage.clear()
      this.ngZone.run(() => {
        this.router.navigate(['/login']);
      });
    })
  }

  SetUserData(username: string, firstName: string, lastName: string, contactNumber: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`USERS/${this.userData.uid}`);
    return userRef.set({
      uid: this.userData.uid,
      email: this.userData.email,
      userName: username,
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber
    },
      {
        merge: true
      })
  }
}
