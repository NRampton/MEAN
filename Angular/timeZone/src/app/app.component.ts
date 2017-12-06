import { Component } from '@angular/core';

var today = new Date();
var zoneFlags: Array<boolean> = [false, false, false, false];
var tzone = 'EST';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  lastTimeZoneSelected = null;

  onTZButtonClick(timezone) {
    this.today = new Date();
    if (timezone === 'MST') {
      this.today.setHours(this.today.getHours() -2);
    } else if (timezone === 'CST') {
      this.today.setHours(this.today.getHours() - 1);
    } else if (timezone === 'PST') {
      this.today.setHours(this.today.getHours() - 3);      
    }
    this.lastTimeZoneSelected = timezone;
    console.log(this.lastTimeZoneSelected);
  }

//   zoneFlags = zoneFlags;
//   today = today;
//   tzone = tzone;
//   onTZButtonClick(i): void {
//     for (let x in zoneFlags) {
//       zoneFlags[x] = false;
//     }
//     zoneFlags[i] = true;
//     if(i===0) {tzone='PST';} 
//     else if(i===1) {tzone = 'MST';}
//     else if(i===2) {tzone = 'CST';}
//     else {tzone = 'EST';}
//     console.log(tzone);
//   }
  
//   onClearButtonClick(): void {
//     for (let x in zoneFlags) {
//       zoneFlags[x] = false;
//     }
//   }
}
