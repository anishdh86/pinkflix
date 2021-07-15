import { Component, Input, OnInit } from '@angular/core';

import { MediaHttpService } from '../../services/movies/media-http.service';
import { AbstractMediaListComponent } from '../list/abstract-media-list.component';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent<T> 
  extends AbstractMediaListComponent<T>
  implements OnInit {
  
    @Input() mediaListType: string;
    @Input() mediaCategory: string;
    @Input() resultsCount: number;
    @Input() shouldShowPaging: boolean;
  
    constructor(mediaService: MediaHttpService) {
      super(mediaService)
     }
  
    ngOnInit(): void {
      super.ngOnInit()
    }
  
    get listType(): string {
      return this.mediaListType;
    }
  
    get category(): string {
      return this.mediaCategory;
    }

}
