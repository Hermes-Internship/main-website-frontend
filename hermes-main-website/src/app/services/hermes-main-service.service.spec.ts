import { TestBed } from '@angular/core/testing';

import { HermesMainServiceService } from './hermes-main-service.service';

describe('HermesMainServiceService', () => {
  let service: HermesMainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HermesMainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
