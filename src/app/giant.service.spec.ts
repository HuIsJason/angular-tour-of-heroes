import { TestBed } from '@angular/core/testing';

import { GiantService } from './giant.service';

describe('GiantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiantService = TestBed.get(GiantService);
    expect(service).toBeTruthy();
  });
});
