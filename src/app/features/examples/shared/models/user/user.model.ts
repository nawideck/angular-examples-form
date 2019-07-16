import { Job } from '../job/job.model';

export class User {
  public id: number;
  public name: string;
  public phone: string;
  public email: string;
  public job: Job;

  constructor() {
    this.id = null;
    this.name = '';
    this.phone = '';
    this.email = '';
    this.job = new Job();
  }
}
