import { Injectable, EventEmitter} from '@angular/core';
import { Todo } from './todo-item.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  constructor() { }

  private selectedOptionSubject = new BehaviorSubject<string>('all');
  selectedOption$ = this.selectedOptionSubject.asObservable();
  todoAdded = new EventEmitter<Todo[]>();
  todoDeleted = new EventEmitter<Todo[]>();
  onChange = new EventEmitter<void>();
  selectedOption : string = "all";

  todos : Todo[] = [];

  setOption(option : string){
    this.selectedOptionSubject.next(option);
  }

  getTodo() : Todo[]{
    return this.todos;
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

  selectedDisplay(option : string): Todo[]{
    if (option === 'completed') {
      return this.todos.filter(todo => todo.completed === true);
    } else if (option === 'incomplete') {
      return this.todos.filter(todo => todo.completed === false);
    } else {
      return this.todos;
    }
    
  }


  
}
