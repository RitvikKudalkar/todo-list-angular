import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo-item.model';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css']
})
export class TodoDialogComponent {
  statusBoolean : boolean = false;
  constructor(private todoService : TodoService){}



  onTodoAdd(title : string, status : string){
    
    this.statusBoolean = status === "incomplete" ? false : true;
    this.todoService.addTodos(new Todo(6, title, this.statusBoolean ));
    
  }

}
