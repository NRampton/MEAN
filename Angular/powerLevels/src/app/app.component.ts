import { Component } from '@angular/core';
import { PowerLevel } from './power-level'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  multipliers = [ [1, 'Human'], [10, 'Saiyan'], [90, 'SuperSaiyan'], [150, 'SuperSaiyanTWo'], [250, 'SuperSaiyanThree'], [500, 'SuperSaiyanFour'] ];
  level = new PowerLevel();
  updateLevel(event) {
    console.log(event);
  }
}
