import { Injectable } from "@angular/core";

import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AuthorizationAPIKeyInterceptor implements HttpInterceptor {

  private readonly API_KEY: string = '3ce028a9843027900e410c7cfc19264d';
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({
      params: new HttpParams().set(
        'api_key', this.API_KEY
      )
    }))
  }
}