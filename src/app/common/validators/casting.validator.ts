import { AbstractControl, ValidationErrors } from '@angular/forms';

export const castingValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const { firstname, lastname, year } = control.value;
  return (year && (firstname || lastname)) || (!year && !firstname && !lastname)
    ? null
    : { casting: true };
};
