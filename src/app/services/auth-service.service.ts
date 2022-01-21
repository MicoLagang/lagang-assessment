import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthUser } from '../class/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData: any
  authUser: AuthUser;
  isAdmin = false;

  constructor(
    public Auth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public afs: AngularFirestore
  ) {
    this.updateUserState();
    let isAdmin = localStorage.getItem('isAdmin')
    if (isAdmin == "true") this.isAdmin = true;
    this.authUser = JSON.parse(localStorage.getItem('AuthUser')!);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null) ? true : false;
  }

  updateUserState() {
    this.Auth.authState.subscribe((user: any) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

  login(email: string, password: string) {
    return this.Auth.signInWithEmailAndPassword(email, password).then((result) => {
      this.updateUserState()
      this.afs.collection('USERS').doc(result.user.uid).snapshotChanges().subscribe(
        (res) => {
          this.authUser = { ...res.payload.data() as AuthUser }
          console.log(this.authUser)
          localStorage.setItem("AuthUser", JSON.stringify(this.authUser))
          if (this.authUser.role === "admin") {
            console.log("admin")
            localStorage.setItem('isAdmin', 'true')
            this.isAdmin = true;
          }
          this.router.navigateByUrl('/landing')
        }
      )
    });
  }

  register(email: string, password: string) {
    return this.Auth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.updateUserState()
      this.router.navigateByUrl('/landing')
      return result
    });
  }

  logout() {
    return this.Auth.signOut().then(() => {
      this.userData = null;
      localStorage.clear()
      this.isAdmin = false;
      this.ngZone.run(() => {
        this.router.navigate(['/login']);
      });
    })
  }

  SetUserData(username: string, firstName: string, lastName: string, contactNumber: string, result: any) {
    console.log("Updating user state...")
    let data = {
      uid: result.user.uid,
      email: result.user.email,
      userName: username,
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
      role: 'client'
    }
    this.authUser = data;
    localStorage.setItem("AuthUser", JSON.stringify(data))

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`USERS/${result.user.uid}`);
    return userRef.set(data,
      {
        merge: true
      })
  }
}
