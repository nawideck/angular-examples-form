import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormToolsService {
  /**
   * Generate class for field validation (is-invalid or invalid)
   *
   * @param formControl form control to analyse
   * @param isSubmitted indicate if the form that containing the control is submitted or not
   * @returns object with class
   */
  public getFieldClassValidation(formControl: FormControl, isSubmitted: boolean): object {
    return {
      'is-invalid': (isSubmitted && formControl.invalid) || (formControl.invalid && formControl.touched),
      'is-valid': formControl.valid && (formControl.dirty || formControl.touched)
    };
  }
}
