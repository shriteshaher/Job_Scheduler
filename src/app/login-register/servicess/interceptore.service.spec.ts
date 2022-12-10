import { TestBed } from '@angular/core/testing';

import { InterceptoreService } from './interceptore.service';

describe('InterceptoreService', () => {
  let service: InterceptoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
