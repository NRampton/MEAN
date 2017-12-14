import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskDisplayComponent } from './task-display/task-display.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TaskListComponent },
  { path: 'create', component: TaskNewComponent },
  { path: 'update/:id', component: TaskUpdateComponent },
  { path: 'task/:id', component: TaskDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
