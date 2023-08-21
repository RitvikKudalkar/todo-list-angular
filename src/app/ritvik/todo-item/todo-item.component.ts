import { Component } from '@angular/core';
import { Todo } from '../todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  todos : Todo[] = [
    {id: 3, title: "Title 1", completed: true},
    {id: 5, title: "Title 2", completed: false},
    {id: 2, title: "Title 3", completed: true}

  ];
  constructor() {

  }

  onAddTodo(){
    // this.todo.push(new Todo());
  }

  toggle(event : any){
      
  }

  onDelete(){
    console.log("delete");
    
  }

  onEdit(){
    
  }
}
