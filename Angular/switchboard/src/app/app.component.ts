import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switchState: Array<boolean> = [false, false, false, false, false, false, false, false, false, false];
  buttonClick(idx) {
    this.switchState[idx] = !this.switchState[idx];
    if(idx === 0) {
      this.switchState[1] = !this.switchState[1];
    } else if (idx === 9) {
      this.switchState[8] = !this.switchState[8];     
    } else {
      this.switchState[idx-1] = !this.switchState[idx-1];
      this.switchState[idx+1] = !this.switchState[idx+1];     
    }
  }
}
