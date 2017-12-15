import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../bike.service';
import { Bike } from '../../bike';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  bike = new Bike();
  gotbike = false;
  Url: string = '';

  constructor(
    private _bs: BikeService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(bike) {
    this._bs.createBike(bike).subscribe(
      res => this._router.navigate['/my-listings'],
      err => console.log(err)
    )
  }

  imageSubmit(Url) {
    this.bike.imageUrl = Url;
    this.gotbike = true;
  }

}
