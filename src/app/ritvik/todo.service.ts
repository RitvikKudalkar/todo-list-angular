import { Injectable, EventEmitter} from '@angular/core';
import { Todo } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  constructor() { }

  todoAdded = new EventEmitter<Todo[]>();
  todoDeleted = new EventEmitter<Todo[]>();
  onChange = new EventEmitter<void>();

  private todos : Todo[] = []

  getTodo() : Todo[]{
    return this.todos.slice();
  }

  getLength() : number {
    return this.todos.length;
  }

  addTodos(todo : Todo){
    this.todos.push(todo)
    this.todoAdded.emit(this.todos);
    this.onChange.emit();
  }

  updateTodos(id : number, title: string, status :string){
    const todoUpdate = this.todos.find( todo => todo.id === id);

    if(todoUpdate){
      todoUpdate.title = title;
      todoUpdate.completed = status === "completed" ? true : false;
    }
    
  }

  deleteTodo(id : number){
    this.todos = this.todos.filter( todo => todo.id !== id); 
    this.todoDeleted.emit(this.todos);
    this.onChange.emit();  
  }




  
}
