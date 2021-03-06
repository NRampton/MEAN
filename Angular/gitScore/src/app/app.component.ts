import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;
  err: boolean = false;
  clicked(res) {
    this.data = res;
    this.err = false;
  }
  catchError(err) {
    this.err = true;
    this.data = undefined;
  }
}
