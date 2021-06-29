import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApplicationFrameComponent } from './components/application-frame/application-frame.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';

@NgModule({
  declarations: [
    HeaderNavigationComponent,
    ApplicationFrameComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderNavigationComponent,
    ApplicationFrameComponent
  ]
})
export class SharedModule { }
