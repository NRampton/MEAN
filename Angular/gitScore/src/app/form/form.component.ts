import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username: string;
  data;
  @Output() formEmitter = new EventEmitter();
  @Output() errorEmitter = new EventEmitter();

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }
  
  submitForm() {
    this._githubService.getData(this.username).subscribe(
      res => {this.formEmitter.emit(res)},
      err => { this.errorEmitter.emit()},
      () => { console.log("Yay, all done.")}
    );
    this.username = '';
  }
}
