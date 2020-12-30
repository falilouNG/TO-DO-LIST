import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoPanelComponent} from './todo-panel.component';
import {MaterialImportModule} from '../../shared/material-import/material-import.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalNewCardComponent} from './components/modals/modal-new-card/modal-new-card.component';
import {TodoCardComponent} from './components/views/todo-card/todo-card.component';
import {ModalNewCardItemComponent} from './components/modals/modal-new-card-item/modal-new-card-item.component';
import {ModalConfirmDeleteComponent} from './components/modals/modal-confirm-delete/modal-confirm-delete.component';
import {TodoService} from '../../shared/services/todo.service';
import {HttpClientModule} from '@angular/common/http';
import { ModalEditCardItemComponent } from './components/modals/modal-edit-card-item/modal-edit-card-item.component';
import { ModalEditCardComponent } from './components/modals/modal-edit-card/modal-edit-card.component';


@NgModule({
  declarations: [TodoPanelComponent, ModalNewCardComponent, TodoCardComponent, ModalNewCardItemComponent, ModalConfirmDeleteComponent , ModalEditCardItemComponent, ModalEditCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialImportModule,
    HttpClientModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {
}
