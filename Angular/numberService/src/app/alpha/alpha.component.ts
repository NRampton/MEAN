import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: Array<number> = [];
  constructor(public _numbersService: NumbersService) { }

  pushAlpha() {
    let num = Math.floor(Math.random() * 100);
    this._numbersService.alphaNumbers.push(num);
    this.numbers = this._numbersService.alphaNumbers;
    let sum = 0;
    for (let number of this.numbers) {
      sum += number;
    }
    this._numbersService.alphaSum = sum;
  }

  ngOnInit() {
  }

}
