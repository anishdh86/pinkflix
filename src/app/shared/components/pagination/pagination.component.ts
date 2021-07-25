import { Component, Input, OnInit } from '@angular/core';
import { ListResult } from '../../models/list-result.model';
import { Pagination } from '../../models/pagination.model';

import { PaginationService } from '../../services/pagination/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent<T> implements OnInit {
  private _listResult: ListResult<T>;

  currentPage = 1;
  pageSize: number;
  
  @Input() shouldShowPaging: boolean;
  
  constructor(private paginationService: PaginationService) { }
  
  ngOnInit(): void {
  }

  @Input() 
  set listResult(listResult: ListResult<T>) {
    this._listResult = listResult;
    this.currentPage = listResult.page;
    this.pageSize = (
      this.listResult.total_results / this.listResult.total_pages
    );
  }

  get listResult(): ListResult<T> {
    return this._listResult;
  }
  
  onPageChange(page: number): void {
    this.currentPage = page;
    this.paginationService.applyPaging(this.currentPage);
  }

}
