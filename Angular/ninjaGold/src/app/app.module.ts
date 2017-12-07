import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    BuildingsComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
