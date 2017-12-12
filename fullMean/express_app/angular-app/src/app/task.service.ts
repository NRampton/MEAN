import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class TaskService {
  constructor(private _http: Http) { }

  retrieveAll(): Observable<Response> {
    return this._http.get('http://localhost:8000/tasks');
  }

  createTask(task: Task): Observable<Response> {
    return this._http.post('http://localhost:8000/tasks', task);
  }
}
