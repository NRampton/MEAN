import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  user = new Subject();

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ) { }

  register(user) {
    return this._httpClient.post('/api/users', user);
  }

  login(user): Observable<Response> {
    return this._http.post('/api/users/login', user);
  }

  setUser(user) {
    this.user.next(user);
  }

  killSub() {
    this.user.error(false);
    this.user = new Subject();
  }

  checkSession() {
    return this._httpClient.get('/refresh');
  }
}
