import { Injectable } from '@angular/core';

@Injectable()
export class NumbersService {
  alphaNumbers: Array<number> = [];
  betaNumbers: Array<number> = [];
  alphaSum: number;
  betaSum: number;
  constructor() { }

}
