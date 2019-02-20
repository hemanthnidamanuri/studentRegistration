import { FormGroup } from '@angular/forms';

export class ConfirmValidator{
  static validate(registrationFormGroup: FormGroup) {
    const password = registrationFormGroup.controls.pwd.value;
    const repeatPassword = registrationFormGroup.controls.cpwd.value;

    if (repeatPassword.length <= 0) {
      return null;
    }

    if (repeatPassword !== password) {
      return {
        doesMatchPassword: true
      };
    }

    return null;

  }
}
