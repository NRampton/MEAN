import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  zip: string = '22102';
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
