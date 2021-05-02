import { MovieModule } from './movie/movie.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NG_FORMS_MANAGER_CONFIG, NgFormsManagerConfig} from '@ngneat/forms-manager';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MovieModule],
  providers: [ {
    provide: NG_FORMS_MANAGER_CONFIG,
    useValue: new NgFormsManagerConfig({
      debounceTime: 1000, // defaults to 300
      storage: {
        key: 'NgFormManager',
      },
    }),
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
