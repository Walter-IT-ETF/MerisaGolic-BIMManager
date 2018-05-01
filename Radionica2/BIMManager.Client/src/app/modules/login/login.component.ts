import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) {

  }

  login(){
    this.loginService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/project']);
      },
      (error: any) => console.log(error)
    );
  }
}
