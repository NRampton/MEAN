import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  logged_in_user = new Subject();

  constructor(private _http: Http) { }

  register(user): Observable<Response>{
    return this._http.post('/api/users', user);
  }

  login(user): Observable<Response> {
    return this._http.post('/api/users/login', user);
  }

}
