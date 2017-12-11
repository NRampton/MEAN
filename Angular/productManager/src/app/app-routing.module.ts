import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products/home' },
  { path: 'products/home', component: HomeComponent },
  { path: 'products/new', component: NewComponent },
  { path: 'products/edit/:id', component: EditComponent },
  { path: 'products', pathMatch: 'full', component: ListComponent },
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
