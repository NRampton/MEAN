import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  zip: string = '60610';
  data;

  constructor(private _ws: WeatherService) { }

  ngOnInit() {
    this._ws.getData(this.zip).subscribe(
      res => this.data = res,
      err => console.error(err),
      () => console.log("All finished! Anything else?")
    );
    this.data.high = this.data.main.temp_max;
    this.data.high = (this.data.high-273) * 1.8 + 32;
    this.data.low = this.data.main.temp_min;
    this.data.low = (this.data.low-273) * 1.8 + 32;
  }

}
