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

  user = new User();
  fresh: boolean = false;

  constructor(
    private _bs: BikeService,
    private _us: UserService
  ) { }

  ngOnInit() {
  }

  freshen(bool): void {
    this.fresh = true;
  }

  unfreshen(bool): void {
    this.fresh = false;
  }
}
