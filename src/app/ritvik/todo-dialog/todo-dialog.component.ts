import { Component, EventEmitter, ViewChild, ElementRef, Inject} from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo-item.model';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css']
})
export class TodoDialogComponent {
  statusBoolean : boolean = false;
  counter : number = 1;

  constructor(private todoService : TodoService, public dialogRef: MatDialogRef<TodoDialogComponent>,){}

  onTodoAdd(title : string, status : string){
    this.statusBoolean = status === "incomplete" ? false : true;
    this.todoService.addTodos(new Todo(this.counter, title, this.statusBoolean ));
    this.counter ++;
   
  }

}
