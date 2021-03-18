import { TestBed } from '@angular/core/testing';

import { CajaServiceService } from './caja-service.service';

describe('CajaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CajaServiceService = TestBed.get(CajaServiceService);
    expect(service).toBeTruthy();
  });
});
