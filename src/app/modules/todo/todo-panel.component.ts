import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogData, ModalNewCardComponent} from './components/modals/modal-new-card/modal-new-card.component';
import {ModelTodoCard} from './utils/models/ModelTodoCard';
import {ModelTodoItem} from './utils/models/ModelTodoItem';
import {TodoService} from '../../shared/services/todo.service';

@Component({
  selector: 'app-todo-panel',
  templateUrl: './todo-panel.component.html',
  styleUrls: ['./todo-panel.component.css']
})
export class TodoPanelComponent implements OnInit {

  private name: string;
  private cards: ModelTodoCard[] = [];

  constructor(public dialog: MatDialog, private todoService: TodoService) {
  }

  async ngOnInit() {
    try {
      await this.loadCards();
    } catch (e) {
      alert('Error loading');
    }
  }

  async loadCards() {
    try {
      this.cards = await this.todoService.getCards().toPromise();
    } catch (e) {
      throw e;
    }
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(ModalNewCardComponent, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(async (result: DialogData) => {
      if (result) {
        const card = new ModelTodoCard(null, result.title, result.subTitle, new Date(), new Date(), []);
        try {
          const nCard = await this.todoService.createCard(card).toPromise();
          this.cards.push(nCard);
        } catch (e) {
          alert('erreur');
        }
      }
      console.log('The dialog was closed', result);
    });
  }

  /***
   * @inheritDoc todo make API connection
   * @param card: Which card will are removed
   */
  public removeCard(card: ModelTodoCard) {
    const iCard = this.cards.findIndex(c => c === card);
    if (iCard !== -1) {
      this.cards.splice(iCard, 1);
    }
  }

}
