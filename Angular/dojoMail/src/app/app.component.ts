import { Component } from '@angular/core';

class Email {
  email: string;
  importance: boolean;
  subject: string;
  content: string;
  
  constructor(email: string, importance: boolean, subject: string, content: string){
    this.email = email;
    this.importance = importance;
    this.subject = subject;
    this.content = content;
  }
}
var emailList = [];
var addEmail = function(email: string, importance: boolean, subject: string, content: string) {
  let newEmail = new Email(email, importance, subject, content);
  emailList.push(newEmail);
}
addEmail('bill@gates.com', true, 'New Windows', 'Windows XI will launch in year 2100.');
addEmail('ada@lovelace.com', true, 'Programming', 'Enchantress of Numbers');
addEmail('john@carmac.com', false, 'Updated Algo', 'New algorithm for shadow volumes');
addEmail('gabe@newelcom', false, "HL3!", 'Just kidding...');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emailList = emailList;
}
