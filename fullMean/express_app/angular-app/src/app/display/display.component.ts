import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  tasks;

  constructor(
    private _ts: TaskService,
    private _http: Http
  ) { }

  ngOnInit() {
    this.tasks = this._ts.retrieveAll().subscribe(
      res => {return res.json()},
      err => console.error(err)
    )
  }

}
