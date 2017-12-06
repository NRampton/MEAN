import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switchState: Array<boolean> = [false, false, false, false, false, false, false, false, false, false];
  buttonClick(idx) {
    if (this.switchState[idx]) {
      this.switchState[idx] = false;
    } else {
      this.switchState[idx] = true;
    }
  }
}
