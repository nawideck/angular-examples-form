import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../shared/models/user/user.model';
import { UserWebService } from '../../shared/services/user/user-web.service';
import { map, share, delay } from 'rxjs/operators';
import { JobWebService } from '../../shared/services/job/job-web.service';
import { Job } from '../../shared/models/job/job.model';

@Component({
  selector: 'app-examples-edit-page',
  templateUrl: './examples-edit-page.component.html',
  styleUrls: ['./examples-edit-page.component.scss']
})
export class ExamplesEditPageComponent implements OnInit {
  /**
   * * TODO: paralelize observables
   */

  public user: User;
  public jobs: Job[];
  public user$: Observable<User>;
  public jobs$: Observable<Job[]>;

  public editionMode: boolean;

  private userId: number;

  constructor(private userWebService: UserWebService, private jobWebService: JobWebService) {
    this.user = null;
    this.editionMode = true;
    this.userId = 1;
  }

  ngOnInit() {
    // Get observable for userData
    this.user$ = this.getUser();

    // TODO: paralelize observables
    // this.jobs$ = this.getAllJobs();
    this.getAllJobs().subscribe();
  }

  getUser(): Observable<User> {
    const user$ = this.editionMode ? this.userWebService.get(this.userId) : of(new User());
    return user$
      .pipe(
        map((user: User) => {
          return (this.user = user);
        })
      )
      .pipe(share());
  }

  getAllJobs(): Observable<Job[]> {
    const user$ = this.jobWebService.getAll();
    return user$
      .pipe(
        map((jobs: Job[]) => {
          return (this.jobs = jobs);
        })
      )
      .pipe(share());
  }

  onSubmit(user: User): void {
    const doprSave$ = this.editionMode ? this.userWebService.update(user) : this.userWebService.create(user);

    doprSave$.subscribe(
      (data: User) => {
        console.log('data created/updated', data);
      },
      () => {
        console.log('error during creation/update');
      }
    );
  }
}
