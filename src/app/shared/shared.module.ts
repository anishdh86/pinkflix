import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApplicationFrameComponent } from './components/application-frame/application-frame.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { MediaTileComponent } from './components/media-tile/media-tile.component';
import { MediaListComponent } from './components/media-list/media-list.component';

@NgModule({
  declarations: [
    HeaderNavigationComponent,
    ApplicationFrameComponent,
    MediaTileComponent,
    MediaListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderNavigationComponent,
    ApplicationFrameComponent,
    MediaTileComponent,
    MediaListComponent
  ]
})
export class SharedModule { }
