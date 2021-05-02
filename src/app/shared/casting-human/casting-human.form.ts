import { castingValidator } from './../../common/validators/casting.validator';
import { integerValidator } from './../../common/validators/integer.validator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyForm } from './../../common/models/form/my-form';
import { Casting } from './../../common/models/movie/casting';

export class CastingHumanForm extends FormGroup implements MyForm<Casting> {
  constructor(data: Casting) {
    super({
      firstname: new FormControl(data?.firstname),
      lastname: new FormControl(data?.lastname),
      year: new FormControl(data?.year, [
        Validators.min(0),
        Validators.max(2020),
        integerValidator,
      ]),
    });
    this.setValidators(castingValidator);
  }
  toData(): Casting {
    return {
      firstname: this.get('firstname').value,
      lastname: this.get('lastname').value,
      year: this.get('year').value,
    };
  }
  reset() {
    super.reset();
  }
}
