import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';


@Injectable()
export class LoginService{

    private readonly _url: string;
    private headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    this._url = 'http://localhost:5000/api/Auth/login';
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    login(email:string, password:string){
        return this.http.post(this._url, {
            Email: email,
            Password: password
        });
    }

}