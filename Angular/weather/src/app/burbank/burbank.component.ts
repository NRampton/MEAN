import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  zip: string = "91502";
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
