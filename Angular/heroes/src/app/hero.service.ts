import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(public _messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this._messageService.add('HeroService: fetched heroes');
    console.log(this._messageService.messages);
    return of(HEROES);
  }

  getHero(id:number): Observable<Hero> {
    this._messageService.add(`HeroService: fetche hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
