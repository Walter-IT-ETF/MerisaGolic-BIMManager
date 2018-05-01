import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';


@Injectable()
export class RegisterService{

    private readonly _url: string;
    private headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    this._url = 'http://localhost:5000/api/Auth/register';
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    register(email: string, password: string, confirmPassword: string ){
       
        return this.http.post<any>(this._url, {
                Email: email,
                Password: password,
                ConfirmPassword: confirmPassword
            });
    }

}