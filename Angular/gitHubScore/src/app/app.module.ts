import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { GithubService} from './github.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    Response,
  ],
  providers: [ 
    GithubService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
