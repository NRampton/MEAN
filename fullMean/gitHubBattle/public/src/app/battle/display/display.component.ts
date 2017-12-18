import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  status: string = '';
  username: string;
  user: User;

  @Input() player_num: number;

  @Output() ready = new EventEmitter();

  constructor(private _us: UserService) { }

  ngOnInit() {
    this.status = 'waiting';
  }

  submitHandler() {                                                   //When a user clicks the form:
    this.status = 'fetching';                                         //display a message while the API responds
    this._us.getUser(this.username).subscribe(                        //try to get that username from GitHub's API
      (res) => {                                                      //first callback--if the API request is successful
        this.status = "success";                                      //change component status so it displays the retrieved user
        this.user = new User();                                       //make a new User object and initialize it.
        this.user.name = res.json().login;
        this.user.score = (res.json().public_repos + res.json().followers) * 12;
        this.user.imageUrl = res.json().avatar_url;
        if (this.player_num == 1) {                                   //Update the service's records on which players are ready
          this._us.playerOneStatus = true;
          this._us.playerOne = this.user;
        } else if (this.player_num == 2) {
          this._us.playerTwoStatus = true;
          this._us.playerTwo = this.user;
        }
        if (this._us.playerOneStatus && this._us.playerTwoStatus) {   //If both players are now ready, send out the ready event to display the button.
          this.ready.emit();
        }
      },
      (err) => {
        this.status = "failed";
      }
    );
  }

  tryAgain(): void {                        //If a player backs out on the fight
    this.status = 'waiting';                //return page to form
    this.username = '';                     //blank out the username
    this.user = new User();
    this.ready.emit();                   //emit an event so the battle component makes the button disappear
  }

}
