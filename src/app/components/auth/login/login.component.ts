import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  alert = ""

  constructor(
    public authService: AuthServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.authService.login(email, password).then(() => {
      this.router.navigate(['/landing'])
    }).catch((error) => {
      console.log(error)
      this.alert = error
    })
  }

}
