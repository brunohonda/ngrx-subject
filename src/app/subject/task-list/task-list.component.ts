import { TaskService } from './../../services/task.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public taskList$!: Observable<{ id: number; name: string }[]>;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskList$ = this.taskService.taskList$;
    this.taskService.getList().subscribe()
  }

  delete(id: number) {
    this.taskService
      .delete(id)
      .subscribe();
  }

}
