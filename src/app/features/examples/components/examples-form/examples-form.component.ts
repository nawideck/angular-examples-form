import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { User } from '../../shared/models/user/user.model';

import { FormCustom } from '../../../../core/interfaces/form-custom';
import { phoneValidator } from '../../../../ui/directives/validators/phone-validator.directive';
import { Job } from '../../shared/models/job/job.model';
import * as moment from 'moment';
import { UserComment } from '../../shared/models/user-comment/user-comment';

@Component({
  selector: 'app-examples-form',
  templateUrl: './examples-form.component.html',
  styleUrls: ['./examples-form.component.scss']
})
export class ExamplesFormPageComponent implements OnInit, FormCustom {
  /**
   * TODO: ngSelect example (multi select)
   * TODO: autocomplete
   * TODO: upload file (ajax)
   * TODO: ArrayForm add button
   * TODO: add others validators
   * TODO: errors
   * TODO: general ergonomie
   * TODO: améliorer form pattern
   * TODO: try catch ?
   * TODO: tests
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
    console.log(this.user);
    this.populateForm();
    console.log(this.jobs);
  }

  createForm(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [phoneValidator()]],
      job: [null],
      genre: [''],
      birthDate: [''],
      comments: this.fb.array([]),
      activated: [false]
    });
  }

  populateForm(): void {
    if (this.user) {
      this.userForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        job: this.user.job,
        genre: this.user.genre,
        birthDate: moment(this.user.birthDate).toDate(),
        activated: this.user.activated
      });
      this.initCommentsFormArray(this.user.comments);
    }
  }

  prepareSaveEntity(): User {
    const formModel: User = this.userForm.getRawValue();
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

  getFormRawValue() {
    return this.userForm.getRawValue();
  }

  get commentsFormArray(): FormArray {
    return this.userForm.get('comments') as FormArray;
  }

  getCommentsFormGroup(comment: UserComment): FormGroup {
    return this.fb.group({
      id: [comment.id],
      value: [comment.value],
      date: [comment.date]
    });
  }

  createComment(comment: UserComment): FormGroup {
    const commentGroup = this.getCommentsFormGroup(comment);
    console.log(this.commentsFormArray);
    this.commentsFormArray.push(commentGroup);

    // this.userForm.markAsDirty();

    return commentGroup;
  }

  initCommentsFormArray(comments: UserComment[]) {
    if (this.user && this.user.comments) {
      this.user.comments.forEach((comment: UserComment) => {
        this.createComment(comment);
      });
    }
  }
}
