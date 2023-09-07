import { TestBed } from '@angular/core/testing';

import { LivetoDoService } from './liveto-do.service';

describe('LivetoDoService', () => {
  let service: LivetoDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivetoDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
