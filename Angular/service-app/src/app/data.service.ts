import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: Array<number> = [1, 2, 3];

  retreiveNumbers(): Array<number> {
    return this.numbers;
  }

  addNumber(num: number): void {
    this.numbers.push(num);
  }

  constructor() { }

}
