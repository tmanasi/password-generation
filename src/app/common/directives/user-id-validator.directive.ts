import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors, ValidatorFn } from '@angular/forms';


export function userIdValidator(): ValidatorFn {

  const UserID_REGEXP = /^([a-z0-9]+)$/i;

  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = UserID_REGEXP.test(control.value);

    if (isValid) {
      return null;
    } else {
      return {
        userIdValidator: {
          valid: false,
        },
      };
    }
  };

}

@Directive({
  selector: '[appUserIdValidator]'
})
export class UserIdValidatorDirective {

  constructor() { }
  public validate(control: AbstractControl): ValidationErrors | null {
    return userIdValidator()(control);
  }

}
