import { AbstractControl, ValidationErrors } from '@angular/forms';

export const integerValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  try {
    parseInt(control.value, 10);
    return null;
  } catch (error) {
    return { integer: true };
  }
};
