import { Component } from '@angular/core';
import { Quotation } from './quotation'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Array<Quotation> = [];
  pushNewQuote(quotation){
    this.quotes.push(quotation);
  }
  deleteQuote(index): void {
    this.quotes.splice(index, 1);
  }
  reorderQuotes(): void {
    this.quotes.sort((a,b) => {return b.score - a.score})
  }
}
