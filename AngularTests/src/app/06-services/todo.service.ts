
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post<any[]>('...', todo);
  }

  getTodos() {
    return this.http.get<any[]>('...');
  }

  // delete(id) {
  //   return this.http.delete('...').pipe(map(r => r.valueOf()));
  // }
}
