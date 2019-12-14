import { TestBed } from '@angular/core/testing';

import { JobWebService } from './job-web.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobWebService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: JobWebService = TestBed.get(JobWebService);
    expect(service).toBeTruthy();
  });
});
