import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseComponent } from './browse/browse.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { LoginComponent } from './landing/login/login.component';
import { RegistrationComponent } from './landing/registration/registration.component';
import { BikeDisplayComponent } from './browse/bike-display/bike-display.component';
import { SearchComponent } from './browse/search/search.component';
import { CreateComponent } from './my-listings/create/create.component';
import { EditComponent } from './my-listings/edit/edit.component';

import { BikeService } from './bike.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BrowseComponent,
    MyListingsComponent,
    LoginComponent,
    RegistrationComponent,
    BikeDisplayComponent,
    SearchComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    BikeService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
