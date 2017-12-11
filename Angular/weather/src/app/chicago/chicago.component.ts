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
      res => { this.data = res; 
        this.data.main.temp_max = Math.round(this.data.main.temp_max * 9 / 5 - 460);
        this.data.main.temp_min = Math.round(this.data.main.temp_min * 9 / 5 - 460);
        this.data.main.temp = Math.round(this.data.main.temp * 9 / 5 - 460);
      },
      err => console.error(err),
      () => console.log("All finished! Anything else?")
    );
  }
}
