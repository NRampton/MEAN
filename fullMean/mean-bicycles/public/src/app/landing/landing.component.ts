import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  bike: Bike;
  bikes: Bike[] = [];
  user = new User();
  fresh: boolean = false;

  constructor(
    private _bs: BikeService,
    private _us: UserService
  ) { }

  ngOnInit() {
    this.generateRandomBike();
  }

  generateRandomBike() {
    this._bs.getAllBikes().subscribe(
      res => {
        this.bikes = res.json();            // Figure out what's coming back from this request.
        this.bike = this.bikes[(Math.floor(Math.random() * this.bikes.length) + 1)];
        console.log(this.bikes);
      },
      err => console.error(err)
    );
  }

  freshen(bool): void {
    this.fresh = true;
  }

  unfreshen(bool): void {
    this.fresh = false;
  }
}
