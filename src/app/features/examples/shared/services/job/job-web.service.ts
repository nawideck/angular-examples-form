import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Job } from '../../models/job/job.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobWebService {
  private urlStubs: string;

  private enableGetStub: boolean;
  constructor(private http: HttpClient) {
    this.urlStubs = 'assets/data/stubs/jobs/jobs.stubs.json';

    this.enableGetStub = true;
  }

  getAll(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.urlStubs}`);
  }

  get(id: number): Observable<Job> {
    return this.http
      .get<Job>(`${this.urlStubs}`)
      .pipe(
        map((job: any) => {
          return job[0] as Job;
        })
      )
      .pipe(delay(100));
  }

  create(job: Job): Observable<Job> {
    return of(job);
  }

  update(job: Job): Observable<Job> {
    return of(job);
  }
}
