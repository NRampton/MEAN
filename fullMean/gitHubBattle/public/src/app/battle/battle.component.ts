import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  ready: boolean = false;

  constructor(private _us: UserService) { }

  ngOnInit() {
  }

  prepareForBattle(): void {      //Sets the ready variable to true, making the fight button appear.
    this.ready = !this.ready;
  }
}
