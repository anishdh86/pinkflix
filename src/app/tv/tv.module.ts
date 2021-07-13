import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TvRoutingModule } from './tv-routing.module';
import { TvComponent } from './tv.component';
import { TvListComponent } from './components/tv-list/tv-list.component';

@NgModule({
  declarations: [
    TvComponent,
    TvListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TvRoutingModule
  ]
})
export class TvModule { }
