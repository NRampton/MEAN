import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './battle/form/form.component';
import { DisplayUserComponent } from './battle/display-user/display-user.component';
import { ResultsComponent } from './battle/results/results.component';

import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    RankingComponent,
    FormComponent,
    DisplayUserComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
