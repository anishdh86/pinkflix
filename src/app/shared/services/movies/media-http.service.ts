import { HttpClient, HttpParams } from '@angular/common/http';
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

  getMediaList<T>(
    listType: string,
    category: string,
    page: string
  ): Observable<ListResult<T>> {
    return this.http.get<ListResult<T>>(
      this.createDataURL(
        listType,
        category
      ),
      {
        params: new HttpParams().append('page', page)
      }
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
