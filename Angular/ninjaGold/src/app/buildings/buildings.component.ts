import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoldService } from '../gold.service'

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  @Input() buildingData;

  @Output() visitEmitter = new EventEmitter();

  constructor(public _goldService: GoldService) { }

  ngOnInit() {
  }
  visit(idx){
    let goldChange = (Math.floor(Math.random() * (this.buildingData[idx][2] - this.buildingData[idx][1]))) + this.buildingData[idx][1];             //Math.random() * (max - min) + min;
    this._goldService.goldTotal += goldChange;
    this.visitEmitter.emit();
    let logEntry: string = `You visited the ${this.buildingData[idx][0]}, and your gold changed by ${goldChange}.`;
    console.log(logEntry);
    this._goldService.log.push(logEntry);
    console.log(this._goldService.log);
  }

}
