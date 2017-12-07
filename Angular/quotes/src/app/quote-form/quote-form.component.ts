import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../quotation'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() formSubmissionEmitter = new EventEmitter();
  quotation = new Quotation();
  constructor() { }
  onSubmit() {
    this.formSubmissionEmitter.emit(this.quotation);
    this.quotation = new Quotation();
  }
  ngOnInit() {
  }

}
