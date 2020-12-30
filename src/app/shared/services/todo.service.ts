import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ModelTodoCard } from '../../modules/todo/utils/models/ModelTodoCard';
import { ModelTodoItem } from '../../modules/todo/utils/models/ModelTodoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private storageTable = 'camatau_todo';


  constructor() {
  }

  public getStorage(): { nextId: number, cards: ModelTodoCard[] } {
    let storageCards = localStorage.getItem('camatau_todo');
    if (!storageCards) {
      this.initStorage();
      storageCards = localStorage.getItem('camatau_todo');
    }
    return JSON.parse(storageCards);
  }

  private initStorage() {
    const storage = {
      cards: [],
      nextId: 0
    };
    localStorage.setItem(this.storageTable, JSON.stringify(storage));
  }

  private save(storage: { nextId: number, cards: ModelTodoCard[] }) {
    const stringStorage = JSON.stringify(storage);
    localStorage.setItem(this.storageTable, stringStorage);
  }

  public getCards(): Observable<ModelTodoCard[]> {
    const storage = this.getStorage();
    if (storage) {
      return of(storage.cards);
    }
    this.initStorage();
    return of([]);
  }

  public getCard(cardId: number): Observable<ModelTodoCard> {
    const storage = this.getStorage();
    if (storage) {
      return of(storage.cards.find(card => card.id === cardId));
    }
    this.initStorage();
    return of(null);
  }

  public createCard(card: ModelTodoCard): Observable<ModelTodoCard> {

    const storage = this.getStorage();
    if (!storage) {
      this.initStorage();
    }
    const nCard = new ModelTodoCard(storage.nextId, card.title, card.subtitle, new Date(), new Date(), []);
    storage.cards.push(nCard);
    storage.nextId++;
    this.save(storage);
    return of(nCard);
  }


  public updateCard(card , CardId): Observable<Boolean> {

    const storage = this.getStorage();
    if (!storage) {
      this.initStorage();
    }

    const searchCardIndex = storage.cards.findIndex((value) => value.id === CardId );

      console.log("searchItem" ,searchCardIndex);

      storage.cards[searchCardIndex] = {...storage.cards[searchCardIndex] , title : card.title , subtitle : card.subTitle};

      console.log("the card " , storage.cards[searchCardIndex] ) ;
      this.save(storage);


    this.save(storage);
    return of(true);
  }


  public removeCard(cardToDelete) {
    const storage = this.getStorage();
    if (!storage) {
      this.initStorage();
      return of(false);
    }

    const card = storage.cards.find(c => c.id === cardToDelete.id);

    if (card) {
      const searchItemIndex = storage.cards.findIndex((value) => value.id === cardToDelete.id );
      storage.cards.splice(searchItemIndex, 1);
      this.save(storage);

      return of(true);
    }

    return of(false);
  }





  public createItem(item: ModelTodoItem, cardId: number) {
    const storage = this.getStorage();
    if (!storage) {
      this.initStorage();
      return of(false);
    }
    const card = storage.cards.find(c => c.id === cardId);
    if (card) {
      const nextId = card.content.length;
      item.id = nextId;
      card.content.push(item);
      this.save(storage);
      return of(item);
    }
    return of(false);
  }

  public updateItem(item: ModelTodoItem, cardId: number) {
    const storage = this.getStorage();
    if (!storage) {
      this.initStorage();
      return of(false);
    }
    const card = storage.cards.find(c => c.id === cardId);


    if (card) {
      const searchItemIndex = card.content.findIndex((value) => value.id === item.id );
      console.log("searchItem" ,searchItemIndex);
      card.content[searchItemIndex] = {...item};
      this.save(storage);
      return of(item);
    }

    return of(false);
  }

  public deleteItem(item: ModelTodoItem, cardId: number) {
    const storage = this.getStorage();
    if (!storage) {
      this.initStorage();
      return of(false);
    }
    const card = storage.cards.find(c => c.id === cardId);

    if (card) {
      const searchItemIndex = card.content.findIndex((value) => value.id === item.id );
      card.content.splice(searchItemIndex, 1);
      this.save(storage);
      return of(item);
    }

    return of(false);
  }

}
