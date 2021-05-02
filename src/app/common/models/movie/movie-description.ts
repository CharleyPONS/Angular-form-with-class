import { Casting } from './casting';
import { MovieGeneral } from './movie-general';
export interface MovieDescription {
  general: MovieGeneral;
  rating: number;
  actors: Casting[];
}
