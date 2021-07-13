import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-media-tile',
  templateUrl: './media-tile.component.html',
  styleUrls: ['./media-tile.component.scss']
})
export class MediaTileComponent {
  private readonly IMAGE_PATH = 'http://image.tmdb.org/t/p/w500';

  @Input() media: any;

  constructor() {}

  createMediaImageURL(mediaPath: string): string {
    return [
      this.IMAGE_PATH,
      mediaPath
    ].join('');
  }

}
