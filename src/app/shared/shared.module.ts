import { CommonModule } from '@angular/common';
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
    RouterModule
  ],
  exports: [
    HeaderNavigationComponent,
    ApplicationFrameComponent
  ]
})
export class SharedModule { }
