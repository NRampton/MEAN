import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  user = new Subject();

  constructor(private _http: Http) { }

  register(user): Observable<Response>{
    return this._http.post('/api/users', user);
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
    return this._http.get('/refresh').map((user) => {       //What is this map method supposed to be doing, and how can we do
      this.setUser(user);                                   //that with an Observable<Response>?
      return true;
    })
  }
  

}
