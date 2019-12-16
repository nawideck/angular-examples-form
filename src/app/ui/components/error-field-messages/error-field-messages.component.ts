import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldErrorInfo } from './field-error-info.model';
import { Subscription, merge } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import forIn from 'lodash-es/forIn';

@Component({
  selector: 'app-error-field-messages',
  templateUrl: './error-field-messages.component.html',
  styleUrls: ['./error-field-messages.component.scss']
})
export class ErrorFieldMessagesComponent implements OnInit, OnDestroy {
  private pFc: FormControl;

  public fieldsError: Array<FieldErrorInfo>;

  private valueSubscription: Subscription;

  @Input() set fc(fc: FormControl) {
    this.pFc = fc;
    this.updateFieldErrors();
    if (this.pFc) {
      this.valueSubscription = merge(
        this.pFc.valueChanges,
        this.pFc.statusChanges.pipe(distinctUntilChanged())
      ).subscribe(() => {
        this.updateFieldErrors();
      });
    }
  }
  get fc(): FormControl {
    return this.pFc;
  }

  /**
   * Creates an instance of ErrorFieldMessagesComponent.
   */
  constructor() {
    this.fieldsError = [];
  }

  /**
   * Angular onInit native function
   */
  ngOnInit() {}

  /**
   * Angular onDestroy native function
   */
  ngOnDestroy() {
    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  /**
   * Update field errors
   */
  updateFieldErrors(): void {
    let formErrors;

    if (this.pFc) {
      formErrors = this.pFc.errors;
      const errors = [];
      if (formErrors !== null) {
        forIn(formErrors, (infoError, nameError) => {
          if (infoError !== false || infoError !== null) {
            errors.push(new FieldErrorInfo(nameError, infoError));
          }
        });
      }
      this.fieldsError = errors;
    } else {
      this.fieldsError = [];
    }
  }

  /**
   * Get list of field errors
   *
   * @returns list of field errors
   */
  getFieldErrors(): Array<FieldErrorInfo> {
    return this.fieldsError;
  }
}
