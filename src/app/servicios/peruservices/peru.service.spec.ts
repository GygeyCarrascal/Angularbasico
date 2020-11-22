import { TestBed } from '@angular/core/testing';

import { PeruService } from './peru.service';

describe('PeruService', () => {
  let service: PeruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
