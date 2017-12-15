import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { UserService } from '../user.service';
import { Bike } from '../bike';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  bikes: Bike[];
  
  constructor(
    private _bs: BikeService,
    private _us: UserService,
  ) { }

  ngOnInit() {
    this.getAllBikesLocal();
  }

  getAllBikesLocal() {
    this._bs.getAllBikes().subscribe(
      (res) => {
        this.bikes = res.json();
        console.log(this.bikes);
      },
      (err) => {},
      () => console.log("Got the bikes!")
    );
  }
  
}
