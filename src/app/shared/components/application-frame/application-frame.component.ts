import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MoviesHttpService } from '../../services/movies/movies-http.service';

@Component({
  selector: 'app-application-frame',
  templateUrl: './application-frame.component.html',
  styleUrls: ['./application-frame.component.scss']
})
export class ApplicationFrameComponent implements OnInit {
  genres$: Observable<any>;

  constructor(private moviesService: MoviesHttpService) {
    this.genres$ = of(null);
   }

  ngOnInit(): void {
    this.genres$ = this.moviesService.getMoviesList('popular');
  }

}
