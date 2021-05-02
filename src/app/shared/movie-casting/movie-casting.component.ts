import { CastingHumanForm } from './../casting-human/casting-human.form';
import { MovieCastingForm } from './movie-casting.form';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-casting',
  templateUrl: './movie-casting.component.html',
  styleUrls: ['./movie-casting.component.css'],
})
export class MovieCastingComponent {
  @Input() form: MovieCastingForm;

  onDeleteCasting(index: number) {
    this.form.removeAt(index);
  }
  addCasting() {
    this.form.push(new CastingHumanForm({} as any));
  }
}
