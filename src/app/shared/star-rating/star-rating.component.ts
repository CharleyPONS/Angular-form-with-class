import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: StarRatingComponent,
      multi: true,
    },
  ],
})
export class StarRatingComponent implements ControlValueAccessor {
  public disabled: boolean;
  public value: number;
  // For display pupo
  get starArray(): any[] {
    return new Array(5);
  }

  onTouched = (...args) => {};
  onChanged = (...args) => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRatingValue(rating: number) {
    if (!this.disabled) {
      this.value = rating;
      this.onChanged(rating);
      this.onTouched();
    }
  }
}
