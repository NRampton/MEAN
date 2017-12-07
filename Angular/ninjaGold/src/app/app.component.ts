import { Component } from '@angular/core';
import { GoldService} from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _goldService: GoldService) { }
  buildingData = [ ['Farm', 2, 5], ['Cave', 5, 10], ['Casino', -100, 100], ['House', 7, 15] ];
  goldTotal = this._goldService.goldTotal;
  update() {
    this.goldTotal = this._goldService.goldTotal;
  }
}
