import { MovieGeneralForm } from './../movie-general/movie-general.form';
import { MovieDescription } from '../../common/models/movie/movie-description';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyForm } from '../../common/models/form/my-form';
import { MovieCastingForm } from '../movie-casting/movie-casting.form';

export class MovieDescriptionForm
  extends FormGroup
  implements MyForm<MovieDescription> {
  get general(): MovieGeneralForm {
    return this.get('general') as MovieGeneralForm;
  }
  get actors(): MovieCastingForm {
    return this.get('actors') as MovieCastingForm;
  }
  constructor(data: MovieDescription) {
    super({
      general: new MovieGeneralForm(data?.general),
      // You should test to varie th disabled value
      // and th Validators.min/max to see the star-rating
      // form component in action
      rating: new FormControl({ value: data?.rating, disabled: false }, [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      actors: new MovieCastingForm(data?.actors),
    });
  }
  toData(): MovieDescription {
    return {
      general: this.general?.toData(),
      rating: this.get('rating').value,
      actors: this.actors?.toData(),
    };
  }
  reset() {
    super.reset();
  }
}
