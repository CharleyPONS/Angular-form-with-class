import { FormArray } from '@angular/forms';

export abstract class MyFormArray extends FormArray {
  updDownItem(index: number, upOrDown: 1 | -1) {
    this.moveItem(index, index + upOrDown);
  }
  moveItem(index: number, newIndex: number) {
    const item = this.at(index);
    this.removeAt(index);
    this.insert(newIndex, item);
  }
}
