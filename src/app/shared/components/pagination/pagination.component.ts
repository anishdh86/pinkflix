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
  currentPage = 1
  pageSize = 20;
  
  @Input() listResult: ListResult<T>;
  @Input() shouldShowPaging: boolean;

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.paginationService.applyPaging(page);
  }

}
