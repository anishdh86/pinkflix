import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ListResult } from '../../models/list-result.model';

import { Movie } from '../../models/movie.model';
import { TV } from '../../models/tv.model';
import { MediaHttpService } from '../../services/movies/media-http.service';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
  @Input() category: string;
  @Input() listType: string;

  listResults$?: Observable<ListResult>;

  constructor(private mediaService: MediaHttpService) { 
    this.category = '';
    this.listType = '';
  }

  ngOnInit(): void {
    this.listResults$ = this.mediaService.getMediaList(
      this.listType,
      this.category
    );
  }

}
