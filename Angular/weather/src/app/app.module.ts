import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { TulsaComponent } from './tulsa/tulsa.component';

import { WeatherService } from './weather.service';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent,
    TulsaComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
