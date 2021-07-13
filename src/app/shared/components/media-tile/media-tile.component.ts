import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { TV } from '../../models/tv.model';

@Component({
  selector: 'app-media-tile',
  templateUrl: './media-tile.component.html',
  styleUrls: ['./media-tile.component.scss']
})
export class MediaTileComponent {
  private readonly IMAGE_PATH = 'http://image.tmdb.org/t/p/w500';
  private readonly NO_IMAGE_PATH = '../../../../assets/images/no-image.png';

  @Input() media: any;

  constructor() {}

  createMediaImageURL(mediaPath: string): string {
    if (!mediaPath) {
      return this.NO_IMAGE_PATH;
    }
    return [
      this.IMAGE_PATH,
      mediaPath
    ].join('');
  }

}
