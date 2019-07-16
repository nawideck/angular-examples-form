import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../shared/models/user/user.model';
import { UserWebService } from '../../shared/services/user/user-web.service';
import { map, share, delay } from 'rxjs/operators';

@Component({
  selector: 'app-examples-edit-page',
  templateUrl: './examples-edit-page.component.html',
  styleUrls: ['./examples-edit-page.component.scss']
})
export class ExamplesEditPageComponent implements OnInit {
  public user$: Observable<User>;
  public user: User;
  public editionMode: boolean;

  private userId: number;

  constructor(private userWebService: UserWebService) {
    this.user = null;
    this.editionMode = true;
  }

  ngOnInit() {
    // Get observable for userData
    this.user$ = this.getUser();
    // this.user$ = of(new User())
    //   .pipe(
    //     map((data: any) => {
    //       this.user = data;
    //       return data;
    //     })
    //   )
    //   .pipe(delay(100))
    //   .pipe(share());
    // this.user$.subscribe();
  }

  getUser(): Observable<User> {
    const user$ = this.editionMode ? this.userWebService.get(this.userId) : of(new User());
    return user$
      .pipe(
        map((user: User) => {
          this.user = user;
          return this.user;
        })
      )
      .pipe(share());
  }

  onSubmit(user: User): void {
    const doprSave$ = this.editionMode ? this.userWebService.update(user) : this.userWebService.create(user);

    doprSave$.subscribe(
      (user: User) => {
        console.log('data created/updated', user);
      },
      () => {
        console.log('error during creation/update');
      }
    );
  }
}
