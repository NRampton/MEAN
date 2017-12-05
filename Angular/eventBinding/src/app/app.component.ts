import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onKeyUp(event) {
    console.log(`KeyUp event is working. Event:`, event);
  }
}
