import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList = new Subject<{ id: number; name: string; }[]>();
  private url = 'http://localhost:3000/task';

  public taskList$ = this.taskList.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  create(name: string) {
    return this.httpClient
      .post(this.url, { name })
      .pipe(tap(() => this.getList()));
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${id}`)
      .pipe(tap(() => this.getList()));
  }

  getList() {
    return this.httpClient
      .get<{ id: number; name: string; }[]>(this.url)
      .pipe(tap(data => this.taskList.next(data)));
  }
}
