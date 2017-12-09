import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tulsa',
  templateUrl: './tulsa.component.html',
  styleUrls: ['./tulsa.component.css']
})
export class TulsaComponent implements OnInit {
  zip: string = '74103';
  data;
  
  constructor(private _ws: WeatherService) { }
  
  ngOnInit() {
    this._ws.getData(this.zip).subscribe(
      res => console.log(res),
      err => console.error(err),
      () => console.log("All finished! Anything else?")
    )
  }

}
