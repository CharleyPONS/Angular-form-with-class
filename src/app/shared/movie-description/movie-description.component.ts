import { MovieDescriptionForm } from './movie-description.form';
import {Component, Input, OnInit} from '@angular/core';
import {NgFormsManager} from "@ngneat/forms-manager";
import {MovieCastingForm} from "../movie-casting/movie-casting.form";
import {CastingHumanForm} from "../casting-human/casting-human.form";

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css'],
})
export class MovieDescriptionComponent implements OnInit {
  @Input() form: MovieDescriptionForm;

  constructor(private formsManager: NgFormsManager
  ){}
  ngOnInit(): void {

    this.formsManager.upsert('MovieDescriptionForm', this.form,  {
      persistState: true,
      arrControlFactory: { actors: value => new CastingHumanForm(value) },

    });
  }
}
