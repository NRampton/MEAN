import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  playerOneStatus: boolean = false;
  playerTwoStatus: boolean = false;

  playerOne: User;
  playerTwo: User;

  winner: User;
  loser: User;

  constructor(private _http: Http) { }

  getUser(username): Observable<Response>{
    return this._http.get(`https://api.github.com/users/${username}?client_id=NRampton&client_secret=f19bf9dbfefba1a9765ce3ea46624d5c47a11a7c`);
  }

  whatHappened(): void {
    if (this.playerOne.score > this.playerTwo.score) {
      this.winner = this.playerOne;
      this.loser = this.playerTwo;
      console.log("The winner is:")
      console.log(this.winner);
      console.log("The loser is:");
      console.log(this.loser);
    } else {
      this.winner = this.playerTwo;
      this.loser = this.playerOne;
    }
  }
}
