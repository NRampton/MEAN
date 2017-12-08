import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = ['Hello there.'];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  constructor() { }

}
