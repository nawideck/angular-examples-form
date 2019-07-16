import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

import { User } from '../../models/user/user.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserWebService {
  private urlStubs: string;

  private enableGetStub: boolean;
  constructor(private http: HttpClient) {
    this.urlStubs = 'assets/data/stubs/users/users.stubs.json';

    this.enableGetStub = true;
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlStubs}`);
  }

  get(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.urlStubs}`)
      .pipe(
        map((user: any) => {
          return user[0] as User;
        })
      )
      .pipe(delay(100));
  }

  create(user: User): Observable<User> {
    return of(user);
  }

  update(user: User): Observable<User> {
    return of(user);
  }
}
