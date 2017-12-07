import { Injectable } from '@angular/core';

@Injectable()
export class GoldService {
  log: Array<string> = [];
  goldTotal: number = 0;
  constructor() { }

}
