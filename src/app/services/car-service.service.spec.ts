import { TestBed, inject } from '@angular/core/testing';

import { CarServiceService } from '../services/car-service.service';

describe('CarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarServiceService]
    });
  });

  it('should be created', inject([CarServiceService], (service: CarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
