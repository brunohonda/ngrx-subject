import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SubjectComponent,
    NewTaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [
    SubjectComponent
  ]
})
export class SubjectModule { }
