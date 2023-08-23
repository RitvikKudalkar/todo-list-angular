import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { TodoService } from '../todo.service';
import { TodoFilterService } from '../shared/todo-filter.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  constructor(private dialog : MatDialog, private todoService : TodoService, private todoFilerService : TodoFilterService) {}
  selectedOption : string = "All";
  
  onAdd(){
 
      const dialogRef = this.dialog.open(TodoDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    
  }

  onSelectionChange(event : any){
    this.todoService.setOption(event.value);
  }

}
