import { MovieDescription } from './../../common/models/movie/movie-description';
import { MovieDescriptionForm } from '../../shared/movie-description/movie-description.form';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  form: MovieDescriptionForm;
  data: MovieDescription = {
    general: { title: '', year: null, synopsis: '' },
    rating: 1,
    actors: [{ firstname: 'Robert', lastname: 'De Niro', year: 1940 }],
  };

  ngOnInit(): void {
    this.form = new MovieDescriptionForm(this.data);

    this.form.valueChanges.subscribe(() => {
      this.data = this.form.toData();
    });
  }

  submitForm(event) {
    event.preventDefault();
    alert(JSON.stringify(this.data));
  }
}
