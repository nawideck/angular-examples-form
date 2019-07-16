import { TestBed } from '@angular/core/testing';

import { JobWebService } from './job-web.service';

describe('JobWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobWebService = TestBed.get(JobWebService);
    expect(service).toBeTruthy();
  });
});
