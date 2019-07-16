import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { User } from '../../shared/models/user/user.model';
import { FormCustom } from 'src/app/core/interfaces/form-custom';

@Component({
  selector: 'app-examples-form',
  templateUrl: './examples-form.component.html',
  styleUrls: ['./examples-form.component.scss']
})
export class ExamplesFormPageComponent implements OnInit, FormCustom {
  @Input() user: User;
  @Input() editionMode: boolean;

  // Components Output Event
  @Output() formSubmitted = new EventEmitter<User>();

  // Form :
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.user);
    console.log(this.editionMode);
  }

  createForm(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]]
      // callCenters: this.fb.array([])
    });
  }

  populateForm(): void {
    if (this.user) {
      this.userForm.patchValue({
        name: this.user.name
      });

      // if (this.user.callCenters) {
      //   this.user.callCenters.forEach((element) => {
      //     this.addCallCenter(element);
      //   });
      // }
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
}
