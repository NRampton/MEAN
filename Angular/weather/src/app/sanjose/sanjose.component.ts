import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  zip: string = '95112';
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
