import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';       //a little extra something; lets you run a callback on anything that comes back from an Observable.

@Injectable()
export class GithubService {

  constructor(private _http: HttpClient) { }

  getUserData(username): Observable<any> {
    return this._http.get(`https://api.github.com/users/${username}`);
  }
}
