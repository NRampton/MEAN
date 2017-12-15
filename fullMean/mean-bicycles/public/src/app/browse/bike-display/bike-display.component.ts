import { Component, OnInit, Input } from '@angular/core';
import { BikeService } from '../../bike.service';
import { UserService } from '../../user.service';
import { Bike } from '../../bike';
import { User } from '../../user';

@Component({
  selector: 'app-bike-display',
  templateUrl: './bike-display.component.html',
  styleUrls: ['./bike-display.component.css']
})
export class BikeDisplayComponent implements OnInit {

  @Input() bike: Bike;

  constructor(
    private _bs: BikeService,
    private _us: UserService,
  ) { }

  ngOnInit() {
  }

}
