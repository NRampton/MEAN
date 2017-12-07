import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service'

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  diffLog: Array<number> = [];
  constructor(public _numbersService: NumbersService) { }

  diff() {
    this.diffLog.push((this._numbersService.alphaSum)- (this._numbersService.betaSum));
  }

  ngOnInit() {
  }

}
