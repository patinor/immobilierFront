import { TestBed } from '@angular/core/testing';

import { BienImmobilierServiceService } from './bien-immobilier-service.service';

describe('BienImmobilierServiceService', () => {
  let service: BienImmobilierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienImmobilierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
