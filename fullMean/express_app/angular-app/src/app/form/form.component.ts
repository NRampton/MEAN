import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  task = new Task();
  constructor(
    private _ts: TaskService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this._ts.createTask(this.task).subscribe(
      res => res.json(),
      err => console.error(err)
    )
  }
}
