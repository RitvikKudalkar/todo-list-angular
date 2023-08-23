import { Component, OnChanges, OnInit, SimpleChanges, DoCheck} from '@angular/core';
import { Todo } from '../todo-item.model';
import { TodoService } from '../todo.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';
import { TodoFilterService } from '../shared/todo-filter.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges{
  todos: Todo[] = [];
  filteredTodos : Todo[] = [];
  isComplete : string = "";
  //currentTodo : Todo | undefined ;
  completed : boolean = false;
  selectedOption : string = "";

  constructor(private todoService: TodoService, private dialog : MatDialog, private todoFilterService : TodoFilterService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {

    this.todoService.selectedOption$.subscribe(
      (option : string) => {
        this.selectedOption = option;
        this.filterTodos();
      }
    )

    this.filterTodos();

    this.todoService.todoAdded.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        console.log("Todo Added");
        
      })

    this.todoService.todoDeleted.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        console.log("Todo Deleted");
        
      }
    )
  }

  filterTodos(){
    const todos = this.todoService.getTodo();

    if (this.selectedOption === 'complete') {
      this.todos = todos.filter(todo => todo.completed);
    } else if (this.selectedOption === 'incomplete') {
      this.todos = todos.filter(todo => !todo.completed);
    } else {
      this.todos = todos;
    }

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
