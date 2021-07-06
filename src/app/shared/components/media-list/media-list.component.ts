import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
  @Input() mediaList: Observable<Movie[]>;

  constructor() { 
    this.mediaList = of(null) as unknown as Observable<Movie[]>;
  }

  ngOnInit(): void {
  }

}
