import { TestBed } from '@angular/core/testing';

import { MediaHttpService } from './media-http.service';

describe('MoviesHttpService', () => {
  let service: MediaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
