import { Component } from '@angular/core';

var possibleColors: Array<string> = ['DarkSeaGreen', 'MediumAquaMarine', 'Turquoise', 'DarkSlateGray', 'MediumSpringGreen', 'DarkCyan'];
var colorArr: Array<string> = [];
function pushRandom(): void {
  let value = Math.floor(Math.random() *6 );
  colorArr.push(possibleColors[value]);
}
for (var i = 0; i <= 10; i++ ) {
  pushRandom();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorArr = colorArr;
}
