import { Injectable } from '@angular/core';
import { Note } from './note';
import { Http, Response } from '@angular/http';

@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  index(callback) {
    this._http.get('/notes').subscribe(
      res => callback(res.json()),
      err => console.error(err)
    );
  }

  create(newNote: Note, callback) {
    this._http.post('/notes', newNote).subscribe(
      res => callback(res.json()),
      err => console.error(err)
    );
  }
}
