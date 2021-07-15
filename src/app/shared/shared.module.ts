import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { ApplicationFrameComponent } from './components/application-frame/application-frame.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { MediaTileComponent } from './components/media-tile/media-tile.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderNavigationComponent,
    ApplicationFrameComponent,
    MediaTileComponent,
    MediaListComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbPaginationModule,
    RouterModule
  ],
  exports: [
    //Modules
    NgbPaginationModule,
    //Components
    HeaderNavigationComponent,
    ApplicationFrameComponent,
    MediaTileComponent,
    MediaListComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
