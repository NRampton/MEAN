import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  username: string = "";
  constructor(public _gitHubService: GithubService) { }

  ngOnInit() {
  }

  submitHandler() {
    this._gitHubService.getUserData(this.username).subscribe(
      res => res.json(),
      err => console.error(err),
      () => console.log('Completed')
    );
  }

}
