import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const regExp = new RegExp('^(\\+\\ ?([0-9]+))?(\\ ?(\\(([0-9]+)\\))?([0-9]+)?)+$');
    const isValid = regExp.test(control.value);
    return !isValid ? { phoneValidator: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appPhoneValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }]
})
export class PhoneValidatorDirective {
  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    return phoneValidator()(control);
  }
}
