import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
