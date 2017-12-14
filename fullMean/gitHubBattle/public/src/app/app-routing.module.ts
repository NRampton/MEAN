import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './battle/form/form.component';

const routes: Routes = [
  { path: '/', pathMatch: 'full', component: BattleComponent },
  { path: 'battle', component: BattleComponent },
  { path: 'rankings', component: RankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
