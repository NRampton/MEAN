import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: Array<number> = [];
  constructor(private _dataService: DataService) { }

  pushOne(){
    this._dataService.addNumber(1);
  }

  ngOnInit() {
    this.numbers = this._dataService.retreiveNumbers();
  }

}
