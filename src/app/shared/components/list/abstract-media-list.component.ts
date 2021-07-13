import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { ListResult } from '../../models/list-result.model';
import { MediaHttpService } from '../../services/movies/media-http.service';

@Component({
  template: ''
})
export abstract class AbstractMediaListComponent<T> implements OnInit {
  abstract get category(): string;
  abstract get listType(): string;

  _listResults$: Observable<ListResult<T>>;
  _listContent$: Observable<T[]>;

  constructor(private mediaService: MediaHttpService) { }

  ngOnInit(): void {
    this._listResults$ = this.mediaService.getMediaList(
      this.listType,
      this.category
    );
    this._listContent$ = this._listResults$.pipe(
      pluck('results')
    )
  }

  public get listContent$(): Observable<T[]> {
    return this._listContent$;
  }

}
