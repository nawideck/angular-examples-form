import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserWebService } from './user-web.service';
import { User } from '../../models/user/user.model';

describe('UserWebService', () => {
  let userWebService: UserWebService;
  let http: HttpTestingController;
  let baseUrl: string;
  let hardcodedUsers: any[];

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  beforeEach(() => {
    userWebService = TestBed.get(UserWebService);
    userWebService.activateMock(false);
    http = TestBed.get(HttpTestingController);
    baseUrl = 'api/v1/users';
    hardcodedUsers = [{ name: 'Nawideck' }, { name: 'Titou' }];
  });

  afterEach(() => {
    // ???
    http.verify();
  });

  it('should be created', () => {
    expect(userWebService).toBeTruthy();
  });

  it('HTTP: getAll()', () => {
    // call getAll method
    let actualUsers: User[] = [];
    userWebService.getAll().subscribe((users) => (actualUsers = users));

    http.expectOne(baseUrl).flush(hardcodedUsers);

    // check expected response
    expect(actualUsers.length).toBe(2);
    expect(actualUsers[0].name).toBe('Nawideck');
  });

  it('HTTP: get()', () => {
    // call get method
    let actualUser: User;
    userWebService.get(1).subscribe((user) => (actualUser = user));

    http.expectOne(`${baseUrl}/${1}`).flush(hardcodedUsers[0]);

    // check expected response
    expect(actualUser.name).toBe('Nawideck');
  });

  it('HTTP: create()', () => {
    // call create method
    let actualUser: User;
    userWebService.create(hardcodedUsers[0]).subscribe((user) => (actualUser = user));

    http.expectOne(baseUrl).flush(hardcodedUsers[0]);

    // check expected response
    expect(actualUser.name).toBe('Nawideck');
  });

  it('HTTP: update()', () => {
    // call update method
    let actualUser: User;
    userWebService.update(hardcodedUsers[0]).subscribe((user) => (actualUser = user));

    http.expectOne(baseUrl).flush(hardcodedUsers[0]);
    // check expected response
    expect(actualUser.name).toBe('Nawideck');
  });

  it('HTTP: delete()', () => {
    const userId = hardcodedUsers[0].id;
    let response: any;
    // call delete method
    userWebService.delete(userId).subscribe((data: any) => {
      response = data;
    });

    http.expectOne(`${baseUrl}/${userId}`).flush('');
    expect(response).toBe('');
  });
});
