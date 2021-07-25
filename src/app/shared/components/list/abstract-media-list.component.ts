import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { ListResult } from '../../models/list-result.model';
import { MediaHttpService } from '../../services/movies/media-http.service';

@Component({
  template: ''
})
export abstract class AbstractMediaListComponent<T> implements OnInit, OnDestroy {
  abstract get category(): string;
  abstract get listType(): string;

  _listResults$: Observable<ListResult<T>>;
  _listContent$: Observable<T[]>;

  private mediaSubscription: Subscription;  

  constructor(
    private mediaService: MediaHttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mediaSubscription = this.activatedRoute.queryParamMap
      .subscribe(param => {
        const pageNumber: string = param.get('page')!;

        this._listResults$ = this.mediaService.getMediaList(
          this.listType,
          this.category,
          pageNumber
        );

        this._listContent$ = this._listResults$.pipe(
          pluck('results')
        )
      });
  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }

  public get listContent$(): Observable<T[]> {
    return this._listContent$;
  }

  public get listResults$(): Observable<ListResult<T>> {
    return this._listResults$;
  }

}
