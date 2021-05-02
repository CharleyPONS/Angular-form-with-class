import { CastingHumanForm } from './casting-human.form';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgFormsManager} from "@ngneat/forms-manager";

@Component({
  selector: 'app-casting-human',
  templateUrl: './casting-human.component.html',
  styleUrls: ['./casting-human.component.css'],
})
export class CastingHumanComponent implements OnInit{
  @Input() form: CastingHumanForm;
  @Output() deleteItem = new EventEmitter();
  constructor(private formsManager: NgFormsManager
  ){}
  ngOnInit(): void {
    this.formsManager.upsert('CastingHumanForm', this.form,  {
    });
    this.formsManager.valueChanges('CastingHumanForm').subscribe((v) => {
      console.log(v);
    });
    this.formsManager.valueChanges('MovieGeneralForm').subscribe((v) => {
      console.log(v);
    });

  }
  deleteCasting() {
    this.deleteItem.emit();
  }
}
