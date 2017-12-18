import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [
    { name: "Doug Braswell", title: "General Manager" },
    { name: "Paul Muad'dib", title: "Empperor" },
    { name: "Vanessa Bayer", title: "Funny Person" },
    { name: "Yanni", title: "?" }
  ]

}
