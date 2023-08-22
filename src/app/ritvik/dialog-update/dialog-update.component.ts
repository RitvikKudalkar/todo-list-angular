import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private todoService : TodoService) {
    
  }

  selectedValue : string = this.data.status;
  onUpdate(title: string, status: boolean){
    this.todoService.updateTodos(this.data.id, title, this.selectedValue);
  }
}
