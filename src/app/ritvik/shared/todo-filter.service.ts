import { Injectable, EventEmitter} from '@angular/core';
import { Todo } from '../todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoFilterService {
  selectedOption : string = "all";
  constructor() { }
  onOptionSelected = new EventEmitter<void>();


  setOption(option : string){
    this.selectedOption = option;
    this.onOptionSelected.emit();
  }

  getFilteredTodos(todos: Todo[]): Todo[] {
    if (this.selectedOption === 'complete') {
      return todos.filter(todo => todo.completed === true);
    } else if (this.selectedOption === 'incomplete') {
      return todos.filter(todo => todo.completed === false);
    } else {
      return todos;
    }
  }
}
