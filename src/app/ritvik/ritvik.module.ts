import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RitvikRoutingModule } from './ritvik-routing.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ButtonComponent } from './button/button.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppContentComponent } from './app-content/app-content.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    ButtonComponent,
    TodoItemComponent,
    AppContentComponent
  ],
  imports: [
    CommonModule,
    RitvikRoutingModule
  ],
  exports: [
    AppHeaderComponent,
    ButtonComponent,
    TodoItemComponent,
    AppContentComponent
  ]
})
export class RitvikModule { }
