import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerinfoComponent } from './playerinfo/playerinfo.component';
import { PlayerstatusComponent } from './playerstatus/playerstatus.component';
import { ListComponent } from './playerinfo/list/list.component';
import { AddPlayerComponent } from './playerinfo/add-player/add-player.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerinfoComponent,
    PlayerstatusComponent,
    ListComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
