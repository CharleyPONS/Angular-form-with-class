import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, SharedModule],
})
export class MovieModule {}
