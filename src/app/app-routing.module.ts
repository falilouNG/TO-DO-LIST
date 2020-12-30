import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoPanelComponent} from './modules/todo/todo-panel.component';


const routes: Routes = [
  {
    path: '',
    component: TodoPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
