import { MovieGeneralForm } from './movie-general.form';
import {Component, Input, OnInit} from '@angular/core';
import {NgFormsManager} from "@ngneat/forms-manager";

@Component({
  selector: 'app-movie-general',
  templateUrl: './movie-general.component.html',
  styleUrls: ['./movie-general.component.css'],
})
export class MovieGeneralComponent implements OnInit{
  @Input() form: MovieGeneralForm;
  constructor(private formsManager: NgFormsManager
  ){}
  ngOnInit(): void {

      this.formsManager.upsert('MovieGeneralForm', this.form,  {
        persistState: true
      });
  }
}
