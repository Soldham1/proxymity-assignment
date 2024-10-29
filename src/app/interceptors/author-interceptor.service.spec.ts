import { TestBed } from '@angular/core/testing';

import { AuthorInterceptorService } from './author-interceptor.service';

describe('AuthorInterceptorService', () => {
  let service: AuthorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
