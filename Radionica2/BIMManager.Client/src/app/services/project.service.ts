import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';


@Injectable()
export class ProjectService{

    private readonly _url: string;
    private headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    this._url = 'http://localhost:5000/api/Project';
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }
    getAllProjects(){
        return this.http.get(this._url);
    }

}