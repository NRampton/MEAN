import { Component } from '@angular/core';

var today;
var zoneFlags: Array<boolean> = [false, false, false, false];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoneFlags = zoneFlags;
  onTZButtonClick(i): void {
    for (let x in zoneFlags) {
      zoneFlags[x] = false;
    }
    let offset = 3 - i;
    zoneFlags[i] = true;
    today = new Date();
    today.setHours(today.getHours() - offset);
  }
  
  onClearButtonClick(): void {
    for (let x in zoneFlags) {
      zoneFlags[x] = false;
    }
    today = undefined;
  }
  today = today;
}
