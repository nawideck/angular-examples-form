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
  /**
   * baseUrl of the server
   *
   * @private
   * @type {string}
   * @memberof UserWebService
   */
  private baseUrlServer: string;

  /**
   * baseUrl of the mock
   *
   * @private
   * @type {string}
   * @memberof UserWebService
   */
  private baseUrlMock: string;

  /**
   * indicate if mock is active or not
   *
   * @private
   * @type {boolean}
   * @memberof UserWebService
   */
  private mockActive: boolean;

  /**
   * Creates an instance of UserWebService.
   * @param {HttpClient} http
   * @memberof UserWebService
   */
  constructor(private http: HttpClient) {
    this.baseUrlServer = 'api/v1/users';
    this.baseUrlMock = 'assets/data/stubs/users/users.stubs.json';
    this.mockActive = true;
  }

  /**
   * Activate or not mock
   *
   * @param {boolean} activate
   * @memberof UserWebService
   */
  public activateMock(activate: boolean) {
    this.mockActive = activate;
  }

  /**
   * Get base url
   *
   * @private
   * @returns {string}
   * @memberof UserWebService
   */
  private getBaseUrl(): string {
    return this.mockActive ? this.baseUrlMock : this.baseUrlServer;
  }

  /**
   * Get all users
   * GET: api/v1/users
   *
   * @returns {Observable<User[]>}
   * @memberof UserWebService
   */
  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.getBaseUrl()}`);
  }

  /**
   * Get one user by id
   * GET: api/v1/users/${id}
   *
   * @param {number} id
   * @returns {Observable<User>}
   * @memberof UserWebService
   */
  public get(id: number): Observable<User> {
    const url = this.mockActive ? this.getBaseUrl() : `${this.getBaseUrl()}/${id}`;

    return this.http.get<User>(url).pipe(
      map((user: any) => {
        return this.mockActive ? (user[0] as User) : (user as User);
      })
    );
  }

  /**
   * Create user
   * POST: api/v1/users
   *
   * @param {User} user
   * @returns {Observable<User>}
   * @memberof UserWebService
   */
  public create(user: User): Observable<User> {
    return this.mockActive ? of(user) : this.http.post<User>(`${this.getBaseUrl()}`, user);
  }

  /**
   * Update datas of user
   * PATCH: api/v1/users
   *
   * @param {User} user
   * @returns {Observable<User>}
   * @memberof UserWebService
   */
  public update(user: User): Observable<User> {
    return this.mockActive ? of(user) : this.http.patch<User>(`${this.getBaseUrl()}`, user);
  }

  /**
   * Delete user
   * DELETE: api/v1/users
   *
   * @param {number} id
   * @returns {Observable<void>}
   * @memberof UserWebService
   */
  public delete(id: number): Observable<void> {
    const url = `${this.getBaseUrl()}/${id}`;
    return this.mockActive ? of() : this.http.delete<void>(url);
  }
}
