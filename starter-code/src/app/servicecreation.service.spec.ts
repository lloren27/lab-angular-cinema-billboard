import { TestBed, inject } from '@angular/core/testing';

import { ServicecreationService } from './servicecreation.service';

describe('ServicecreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicecreationService]
    });
  });

  it('should be created', inject([ServicecreationService], (service: ServicecreationService) => {
    expect(service).toBeTruthy();
  }));
});
