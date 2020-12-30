export class ModelTodoItem {
  constructor(public id: number, public title: string, public createdAt: Date, public updatedAt: Date, public cardId = null) {
  }
}
