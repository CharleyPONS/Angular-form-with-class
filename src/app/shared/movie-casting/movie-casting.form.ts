import { CastingHumanForm } from './../casting-human/casting-human.form';
import { Casting } from './../../common/models/movie/casting';
import { MyForm } from '../../common/models/form/my-form';
import { MyFormArray } from 'src/app/common/models/form/my-form-array';

export class MovieCastingForm extends MyFormArray implements MyForm<Casting[]> {
  constructor(data: Casting[]) {
    super(data.map((c: Casting) => new CastingHumanForm(c)));
  }
  toData(): Casting[] {
    return this.controls.map((c: CastingHumanForm) => c.toData());
  }
  reset() {
    super.reset();
  }
}
