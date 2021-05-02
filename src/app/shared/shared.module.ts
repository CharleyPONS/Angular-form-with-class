import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MovieGeneralComponent } from './movie-general/movie-general.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { CastingHumanComponent } from './casting-human/casting-human.component';
import { MovieCastingComponent } from './movie-casting/movie-casting.component';

const exportableComponents = [
  CastingHumanComponent,
  MovieGeneralComponent,
  MovieDescriptionComponent,
  MovieCastingComponent,
  StarRatingComponent,
];
@NgModule({
  declarations: [...exportableComponents],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, ...exportableComponents],
})
export class SharedModule {}
