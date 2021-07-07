import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Movie } from '../../models/movie.model';
import { MoviesHttpService } from '../../services/movies/movies-http.service';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
  @Input() listType: string;

  listResults$: Observable<Movie[]>;

  constructor(private moviesService: MoviesHttpService) { 
    this.listResults$ = of(null) as unknown as Observable<Movie[]>;
    this.listType = '';
  }

  ngOnInit(): void {
    this.listResults$ = this.moviesService.getMoviesList(this.listType)
    .pipe(pluck('results'));
  }

}
