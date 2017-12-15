import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() notFreshEmitter = new EventEmitter();

  user: User;

  constructor(private _us: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.user.email = "";
  }

  loginHandler(user) {
    this.notFreshEmitter.emit(false);
    console.log("loginHandler invoked");
    this._us.login(user).subscribe
  }

}
