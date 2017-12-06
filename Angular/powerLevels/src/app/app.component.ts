import { Component } from '@angular/core';
import { PowerLevel } from './power-level'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  multipliers = [ [1, 'Human'], [10, 'Saiyan'], [90, 'SuperSaiyan'], [150, 'SuperSaiyanTwo'], [250, 'SuperSaiyanThree'], [500, 'SuperSaiyanFour'] ];
  level: number =1;
  updateLevel(newLevel) {
    this.level = newLevel.powerLevel;
  }
}
