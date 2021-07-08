import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListResult } from '../../models/list-result.model';

@Injectable({
  providedIn: 'root'
})
export class MediaHttpService {
  private readonly API_URL: string = 'https://api.themoviedb.org/3';
  private readonly URL_SEPARATOR: string = '/'

  constructor(private http: HttpClient) { }

  getMediaList(
    listType: string,
    category: string
  ): Observable<ListResult> {
    return this.http.get<ListResult>(
      this.createDataURL(
        listType,
        category
      )
    )
  }

  private createDataURL(
    listType: string,
    category: string
  ): string {
    return [
      this.API_URL,
      listType,
      category
    ]
    .join(this.URL_SEPARATOR);
  }
}
