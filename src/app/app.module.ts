import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialImportModule} from './shared/material-import/material-import.module';
import {TodoModule} from './modules/todo/todo.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalNewCardComponent} from './modules/todo/components/modals/modal-new-card/modal-new-card.component';
import {ModalNewCardItemComponent} from './modules/todo/components/modals/modal-new-card-item/modal-new-card-item.component';
import {ModalConfirmDeleteComponent} from "./modules/todo/components/modals/modal-confirm-delete/modal-confirm-delete.component";
import { ModalEditCardItemComponent } from './modules/todo/components/modals/modal-edit-card-item/modal-edit-card-item.component';
import { ModalEditCardComponent } from './modules/todo/components/modals/modal-edit-card/modal-edit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoModule,
    NgbModule,
    MaterialImportModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalNewCardComponent,
    ModalEditCardComponent,
    ModalEditCardItemComponent,
    ModalNewCardItemComponent,
    ModalConfirmDeleteComponent
  ]
})
export class AppModule { }
