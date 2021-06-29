import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {
  private readonly API_URL: string = 'https://api.themoviedb.org/3';
  private readonly URL_SEPARATOR: string = '/'
  private readonly MOVIES: string = 'movie';

  constructor(private http: HttpClient) { }

  getMoviesList(category: string): Observable<any> {
    return this.http.get<any>(
      this.createDataURL(
        this.MOVIES,
        category
      )
    )
  }

  private createDataURL(
    list: string,
    category: string
  ): string {
    return [
      this.API_URL,
      list,
      category
    ]
    .join(this.URL_SEPARATOR);
  }
}
