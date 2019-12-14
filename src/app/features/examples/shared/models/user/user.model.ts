import { Job } from '../job/job.model';
import { UserComment } from '../user-comment/user-comment';

export class User {
  public id: number;
  public name: string;
  public phone: string;
  public email: string;
  public job: Job;
  public genre: string;
  public birthDate: string;
  public comments: UserComment[];
  public activated: boolean;

  constructor() {
    this.id = null;
    this.name = '';
    this.phone = '';
    this.email = '';
    this.job = new Job();
    this.genre = 'male';
    this.birthDate = '';
    this.comments = [];
    this.activated = false;
  }
}
