import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BikeService {

  constructor(private _http: Http) { }

  getAllBikes(): Observable<Response> {
    return this._http.get('/api/bikes');
  }

  createBike(bike): Observable<Response> {
    return this._http.post('api/bikes', bike);
  }
}

//https://www.ward49.com/wp-content/uploads/2017/07/Bike-Logo-Icon.png