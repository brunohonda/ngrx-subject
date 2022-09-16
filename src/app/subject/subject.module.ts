import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject.component';
import { NewTaskComponent } from './new-task/new-task.component';



@NgModule({
  declarations: [
    SubjectComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    SubjectComponent
  ]
})
export class SubjectModule { }
