import {ModelTodoItem} from './ModelTodoItem';

export class ModelTodoCard {
  constructor(public id: number, public title: string, public  subtitle: string, public createdAt: Date, public updatedAt: Date, public content: ModelTodoItem[]) {
  }
}
