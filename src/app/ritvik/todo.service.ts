import { Injectable, EventEmitter} from '@angular/core';
import { Todo } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  constructor() { }

  todoAdded = new EventEmitter<Todo[]>();

  private todos : Todo[] = [
    new Todo(1, "Buy Fish", true),
  ]

  getTodo(){
    return this.todos.slice();
  }

  addTodos(todo : Todo){
    this.todos.push(todo)
    console.log(this.todos);
    this.todoAdded.emit(this.todos);
  }


}
