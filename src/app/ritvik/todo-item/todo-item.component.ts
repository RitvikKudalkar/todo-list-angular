import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../todo-item.model';
import { TodoService } from '../todo.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todos: Todo[] = [];
  isComplete : string = "";
  //currentTodo : Todo | undefined ;
  completed : boolean = false;

  constructor(private todoService: TodoService, private dialog : MatDialog) {}

  ngOnInit(): void {
    this.todoService.todoAdded.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      })

    this.todoService.todoDeleted.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    )
  }
 
  onClick(id : number){
    //this.todos[id-1].completed = !this.todos[id-1].completed;
    const currentTodo = this.todos.find( todo => todo.id === id);
    if(currentTodo){
      currentTodo.completed = !currentTodo?.completed;
    }
  }

  onDelete(id: number) {
    this.todoService.deleteTodo(id);
  }

  onEdit(id: number, title: string, status: boolean) {
    this.isComplete = status === false ? "incomplete" : "complete";
    this.dialog.open(DialogUpdateComponent, {
      data: {
        id : id,
        title : title,
        status : this.isComplete
      }
    });
  }
}
