import { MovieGeneral } from './../../common/models/movie/movie-general';
import { integerValidator } from '../../common/validators/integer.validator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyForm } from '../../common/models/form/my-form';

export class MovieGeneralForm
  extends FormGroup
  implements MyForm<MovieGeneral> {
  constructor(data: MovieGeneral) {
    super({
      title: new FormControl(data?.title, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      year: new FormControl(data?.year, [
        Validators.required,
        Validators.min(0),
        Validators.max(2020),
        integerValidator,
      ]),
      synopsis: new FormControl(data?.synopsis, [
        Validators.required,
        Validators.maxLength(2024),
      ]),
    });
  }
  toData(): MovieGeneral {
    return {
      title: this.get('title').value,
      year: this.get('year').value,
      synopsis: this.get('synopsis').value,
    };
  }
  reset() {
    super.reset();
  }
}
