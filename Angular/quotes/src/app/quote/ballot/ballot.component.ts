import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {
  @Output() upVoteEmitter = new EventEmitter();
  @Output() downVoteEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();
  
  constructor() { }

  upVoteTrigger() {
    this.upVoteEmitter.emit();
  }

  downVoteTrigger() {
    this.downVoteEmitter.emit();
  }

  deleteTrigger() {
    this.deleteEmitter.emit();
  }

  ngOnInit() {
  }

}
