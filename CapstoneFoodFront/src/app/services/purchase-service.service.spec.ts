import { TestBed } from '@angular/core/testing';

import { PurchaseServiceService } from './purchase-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PurchaseServiceService', () => {
  let service: PurchaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PurchaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
