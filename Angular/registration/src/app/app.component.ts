import { Component } from '@angular/core';
import { User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = -1
  user = new User();
  users = [];
  submitted = false;
  onSubmit(){
    this.counter += 1;
    this.users.push(this.user);
    this.user = new User();
    this.submitted = true;
  }
  clearMessage(){
    this.submitted = false;
  }
}
