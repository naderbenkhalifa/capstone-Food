import { TestBed } from '@angular/core/testing';

import { FoodserviceService } from './foodservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FoodserviceService', () => {
  let service: FoodserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(FoodserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
