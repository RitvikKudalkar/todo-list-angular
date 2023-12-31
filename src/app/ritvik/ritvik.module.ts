import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RitvikRoutingModule } from './ritvik-routing.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ButtonComponent } from './button/button.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppContentComponent } from './app-content/app-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog,  MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';




@NgModule({
  declarations: [
    AppHeaderComponent,
    ButtonComponent,
    TodoItemComponent,
    AppContentComponent,
    TodoDialogComponent,
    DialogUpdateComponent
  ],
  imports: [
    CommonModule,
    RitvikRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule

  ],
  exports: [
    AppHeaderComponent,
    ButtonComponent,
    TodoItemComponent,
    AppContentComponent,
    TodoDialogComponent,
    DialogUpdateComponent
  ]
})
export class RitvikModule { }
