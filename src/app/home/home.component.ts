import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { ListResult } from '../shared/models/list-result.model';
import { MoviesHttpService } from '../shared/services/movies/movies-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topRated$: Observable<any>;

  constructor(private moviesService: MoviesHttpService) {
    this.topRated$ = of(null);
   }

  ngOnInit(): void {
    this.topRated$ = this.moviesService.getMoviesList('top_rated').pipe(
      pluck('results')
    );
  }

}
