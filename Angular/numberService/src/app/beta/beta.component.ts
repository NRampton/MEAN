import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service'

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: Array<number> = [];

  constructor(public _numbersService: NumbersService) { }

  betaPush() {
    let num = Math.floor(Math.random() * 100);
    this._numbersService.betaNumbers.push(num);
    this.numbers = this._numbersService.betaNumbers;
    let sum = 0;
    for (let number of this.numbers) {
      sum += number;
    }
    this._numbersService.betaSum = sum;
  }

  ngOnInit() {
  }

}
