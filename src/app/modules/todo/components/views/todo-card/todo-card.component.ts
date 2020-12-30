import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModelTodoCard} from '../../../utils/models/ModelTodoCard';
import {DialogData, ModalNewCardComponent} from '../../modals/modal-new-card/modal-new-card.component';
import {MatDialog} from '@angular/material/dialog';
import {ModelTodoItem} from '../../../utils/models/ModelTodoItem';
import {ModalNewCardItemComponent} from "../../modals/modal-new-card-item/modal-new-card-item.component";
import {ModalEditCardItemComponent} from "../../modals/modal-edit-card-item/modal-edit-card-item.component";
import {ModalConfirmDeleteComponent} from "../../modals/modal-confirm-delete/modal-confirm-delete.component";
import {TodoService} from "../../../../../shared/services/todo.service";
import { ModalEditCardComponent } from '../../modals/modal-edit-card/modal-edit-card.component';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() card: ModelTodoCard;
  @Output() eventRemove = new EventEmitter();
  public  loading = false;
  constructor(private dialog: MatDialog, private todoService: TodoService) {
  }

  ngOnInit() {
  }

  public async  reloadContent() {
    this.loading = true;
    this.card = await this.todoService.getCard(this.card.id).toPromise();
    this.loading = false;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(ModalNewCardItemComponent, {
      width: '250px',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(async (result: DialogData) => {
      if (result) {
        const nItem = new ModelTodoItem(null, result.title, new Date(), new Date());
        let nITemResult = null;
        try {
          //nITemResult = await this.todoService.createItem(nItem, this.card.id).toPromise();
          nITemResult = await this.todoService.createItem(nItem,this.card.id);
          this.card.content.push(nITemResult.value);
        } catch (e) {
          alert('Error   ' + e.getMessages());
        }
      }
      console.log('The dialog was closed', result);
    });
  }

  // Items edition for the pannel
  public editItem(item): void {
    const dialogRef = this.dialog.open(ModalEditCardItemComponent, {
      width: '250px',
      data: {name: ''}
    });


    dialogRef.afterClosed().subscribe(async (result: DialogData) => {
      
      
      
      if (result) {
        const searchItemIndex = this.card.content.findIndex((value) => value.id === item.id );
        console.log("searchItem" ,searchItemIndex);
        this.card.content[searchItemIndex] = {...this.card.content[searchItemIndex] , title : result.title};

        try {
          //nITemResult = await this.todoService.createItem(nItem, this.card.id).toPromise();
          await this.todoService.updateItem(this.card.content[searchItemIndex],this.card.id )
        } catch (e) {
          alert('Error   ' + e.getMessages());
        }
      }
      console.log('The edit dialog was closed', result);
    });
  }

  // items removal for the pannel
  public removeItem(item: ModelTodoItem) {
    const dialogRef = this.dialog.open(ModalConfirmDeleteComponent, {
      width: '250px',
      data: {context: 'item'}
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      if (result) {

        const i = this.card.content.findIndex(it => it === item);
        if (i !== -1) {
          this.todoService.deleteItem(this.card.content[i], this.card.id)

          this.card.content.splice(i, 1);

          Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue ?',
            icon: 'success',
            confirmButtonText: 'YES'
          })
          

        }

      }
    });
  }

  // Cards removal for the pannel
  public removeCard() {
    const dialogRef = this.dialog.open(ModalConfirmDeleteComponent, {
      width: '250px',
      data: {context: 'card'}
    });

    dialogRef.afterClosed().subscribe(async (result: DialogData) => {
      if (result) {
        this.eventRemove.emit(this.card);
// remove the card 
        await this.todoService.removeCard(this.card);
      }
    });
  }



// Cards edition button
  public editCardDialog(card): void {
    const dialogRef = this.dialog.open(ModalEditCardComponent, {
      width: '250px',
      data: {title : card.title , subTitle: card.subtitle}
    });


    dialogRef.afterClosed().subscribe(async (result: DialogData) => {


      if (result) {
    console.log("Card ", card);
      
        try {
          const nCard = await this.todoService.updateCard(result , card.id);
          this.card = {...this.card , title : result.title , subtitle : result.subTitle};
          //this.cards.push(nCard);
        } catch (e) {
          alert('erreur');
        }

      }


      console.log('The dialog was closed', result);
    });
  }


}
