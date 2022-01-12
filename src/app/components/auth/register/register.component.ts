import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  alert = ""

  constructor(
    public authService: AuthServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  register(email: string, username: string, password: string, confirmPassword: string, firstName: string, lastName: string, contactNumber: string) {
    if (password !== confirmPassword) {
      this.alert = "Your password does not match!"
    } else {
      this.authService.register(email, password).then((result) => {
        console.log(result);
        this.router.navigate(['/landing'])
        this.authService.SetUserData(username, firstName, lastName, contactNumber)
          .then((result) => console.log(result))
          .catch((error) => console.log(error))
      }).catch((error) => {
        console.log(error)
        this.alert = error
      })
    }

  }

}
