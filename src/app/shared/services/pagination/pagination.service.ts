import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private readonly PAGE_KEY = 'page';
  
  constructor(private router: Router) { }

  applyPaging(page: number): void {
    const paging: {} = {
      [this.PAGE_KEY]: page
    }

    this.router.navigate(
      [],
      {
        queryParams: paging,
        queryParamsHandling: 'merge'
      }
    )
  }
}
