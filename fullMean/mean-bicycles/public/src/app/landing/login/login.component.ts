import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() notFreshEmitter = new EventEmitter();

  user: User;
  wrong: boolean;

  constructor(
    private _us: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
    this.user.email = "";
  }

  loginHandler(user) {
    this.notFreshEmitter.emit(false);
    console.log("loginHandler invoked");
    this._us.login(user).subscribe(
      (user) => {
        this._us.setUser(user);
        this._router.navigate(['/browse']);
      },
      (err) => {
        this.wrong = true;
        this._router.navigate(['landing']);
      }
    );
  }

}
