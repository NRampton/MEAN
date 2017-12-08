import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
  data;
  constructor(private _http: Http) { }

  getData(username): Observable<Response> {
    return this._http.get(`https://api.github.com/users/${username}`).map(res => res.json()); 
  }
}
