import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { User } from '../../shared/models/user/user.model';
import { FormCustom } from 'src/app/core/interfaces/form-custom';
import { phoneValidator } from 'src/app/ui/directives/validators/phone-validator.directive';
import { Job } from '../../shared/models/job/job.model';

@Component({
  selector: 'app-examples-form',
  templateUrl: './examples-form.component.html',
  styleUrls: ['./examples-form.component.scss']
})
export class ExamplesFormPageComponent implements OnInit, FormCustom {
  /**
   * TODO: checkbox
   * TODO: autocomplete
   * TODO: upload file (ajax)
   * TODO: ArrayForm
   * TODO: add others validators
   * TODO: errors
   * TODO: general ergonomie
   */

  @Input() user: User;
  @Input() jobs: Job[];
  @Input() editionMode: boolean;

  // Components Output Event
  @Output() formSubmitted = new EventEmitter<User>();

  // Form :
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.populateForm();
    console.log(this.jobs);
  }

  createForm(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [phoneValidator()]],
      job: [''],
      genre: ['']
    });
  }

  populateForm(): void {
    if (this.user) {
      this.userForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        job: this.user.job,
        genre: this.user.genre
      });
    }
  }

  prepareSaveEntity(): User {
    const formModel: User = this.userForm.value;
    return Object.assign(this.user, formModel);
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.formSubmitted.emit(this.prepareSaveEntity());
    }
  }

  compareFnJob(job1: Job, job2: Job) {
    return job1 && job2 ? job1.id === job2.id : job1 === job2;
  }
}
