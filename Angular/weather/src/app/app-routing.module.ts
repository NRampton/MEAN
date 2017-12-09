import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { TulsaComponent } from './tulsa/tulsa.component';
import { WashingtonComponent } from './washington/washington.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'burbank', component: BurbankComponent},
  { path: 'chicago', component: ChicagoComponent},
  { path: 'dallas', component: DallasComponent},
  { path: 'sanjose', component: SanjoseComponent},
  { path: 'seattle', component: SeattleComponent},
  { path: 'tulsa', component: TulsaComponent},
  { path: 'washington', component: WashingtonComponent},
  { path: '', pathMatch: 'full', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
