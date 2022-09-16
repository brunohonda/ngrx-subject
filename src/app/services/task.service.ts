import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList = new Subject<string[]>();
  private url = 'http://localhost:3000/task';

  public taskList$ = this.taskList.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  create(name: string) {
    this.httpClient
      .post(this.url, { name })
      .pipe(tap(() => this.getList()))
      .subscribe();
  }

  delete(id: number) {
    this.httpClient
      .delete(`${this.url}/${id}`)
      .pipe(tap(() => this.getList()))
      .subscribe();
  }

  getList() {
    this.httpClient
      .get<string[]>(this.url)
      .pipe(tap(data => this.taskList.next(data)))
      .subscribe();
  }
}
