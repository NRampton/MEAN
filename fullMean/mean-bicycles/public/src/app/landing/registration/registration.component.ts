import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BikeService } from '../../bike.service';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output() regEmitter = new EventEmitter();
  user: User;

  constructor(
    private _bs: BikeService,
    private _us: UserService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.user = new User();
    this.user.email = "";
  }

  onSubmit(user) {
    this._us.register(user).subscribe(
      (res) => {
        console.log(res.json());
        this.regEmitter.emit();
        this.user = new User();
        this.user.email = '';
        this._router.navigate(['landing']);
      },
      (err) => console.error(err.json()),
      () => console.log("Yay, we did it!")
    );
  }

}
