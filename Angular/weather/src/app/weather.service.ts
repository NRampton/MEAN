import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getData(zip): Observable<Response> {
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&&appid=344143366e48285f89319137af3b0853`).map(res => res.json());
  }
    

}
