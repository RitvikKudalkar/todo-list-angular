import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-item.model';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit  {
  todos : Todo[] = [
 
  ];

  constructor(private todoService : TodoService) {

  }

  ngOnInit(): void {
    this.todoService.todoAdded.subscribe(
      ( todos : Todo[])=>{
        this.todos = todos;
        
      })
  }


  toggle(event : any){
      
  }

  onDelete(){
    console.log("delete");
    
  }

  onEdit(){
    
  }
}
