import { TestBed } from '@angular/core/testing';

import { GiantService } from './giant.service';
import { HttpClientModule } from '@angular/common/http';

describe('GiantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: GiantService = TestBed.get(GiantService);
    expect(service).toBeTruthy();
  });
});
