import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  zip: string = '98004';
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
