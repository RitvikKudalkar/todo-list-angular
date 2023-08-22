import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo-item.model';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css']
})
export class AppContentComponent implements OnInit, OnChanges {

  isTodoEmpty: boolean = true;
  leng: number = 0;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.onChange.subscribe(
      () => {
        this.leng = this.todoService.getLength();
        this.isTodoEmpty = this.leng === 0 ? true : false;
      }
    )
  }

  ngOnChanges(): void { }

}
