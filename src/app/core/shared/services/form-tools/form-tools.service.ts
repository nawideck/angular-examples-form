import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormToolsService {
  /**
   * Generate class for field validation (is-invalid or invalid)
   *
   * @param {FormGroup} formGroup
   * @param {string} fieldName
   * @param {*} isSubmitted
   * @returns {*}
   * @memberof FormToolsService
   */
  public getFieldClassValidation(formControl: FormControl, isSubmitted: boolean): object {
    return {
      'is-invalid': (isSubmitted && formControl.invalid) || (formControl.invalid && formControl.touched),
      'is-valid': formControl.valid && (formControl.dirty || formControl.touched)
    };
  }
}
