export class Pagination {
  constructor(
    public page: number,
    public total_pages: number,
    public total_results: number
  ) { }
}