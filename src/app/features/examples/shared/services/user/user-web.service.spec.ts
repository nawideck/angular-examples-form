import { TestBed } from '@angular/core/testing';

import { UserWebService } from './user-web.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserWebService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: UserWebService = TestBed.get(UserWebService);
    expect(service).toBeTruthy();
  });
});
