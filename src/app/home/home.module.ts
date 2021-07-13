import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRouting } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    SharedModule
  ]
})
export class HomeModule { }
