import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: [ '' , [ Validators.required ]]
    });
  }

  create() {
    this.taskService
      .create(this.form.getRawValue().search)
      .subscribe(() => this.form.reset());
  }
}
