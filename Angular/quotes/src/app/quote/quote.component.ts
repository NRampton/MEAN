import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../quotation'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quoteIdx: number;
  @Input() quote: Quotation;

  @Output() deleteEmitter = new EventEmitter();
  @Output() reorderEmitter = new EventEmitter();
  constructor() { }
  upVote(): void {
    this.quote.score += 1;
    this.reorderEmitter.emit();
  }
  downVote(): void {
    this.quote.score -= 1;
    this.reorderEmitter.emit();
  }
  delete(): void {
    this.deleteEmitter.emit(this.quoteIdx);
  }
  ngOnInit() {
  }

}
