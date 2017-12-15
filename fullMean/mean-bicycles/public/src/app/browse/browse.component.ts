import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { UserService } from '../user.service';
import { Bike } from '../bike';
import { Router } from '@angular/router';

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
    private _router: Router
  ) { }

  ngOnInit() {
    this._us.checkSession().subscribe(
      () => this.pagePrep(),
      () => this._router.navigate(['/landing'])
    );
  }

  pagePrep() {                              //This now contains all the stuff we want to have done before the page loads.
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
