import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PowerLevel} from '../power-level'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() formEventEmitter = new EventEmitter();
  constructor() { }
  triggerEvent(event) {
    this.formEventEmitter.emit(event);
    console.log(event);
  }
  ngOnInit() {
  }

}
