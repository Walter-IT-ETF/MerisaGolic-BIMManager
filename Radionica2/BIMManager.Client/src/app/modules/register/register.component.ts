import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent {

  email = '';
  password = '';
  confirmPassword = '';

  constructor(private http: HttpClient, private registerService: RegisterService) {}

  register() {

    this.registerService.register(this.email, this.password, this.confirmPassword)
    .subscribe((response: any) => console.log(response),
        (err: any) => console.error(err));
  }
}
