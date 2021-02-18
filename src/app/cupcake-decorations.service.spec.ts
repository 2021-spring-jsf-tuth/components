import { TestBed } from '@angular/core/testing';

import { CupcakeDecorationsService } from './cupcake-decorations.service';

describe('CupcakeDecorationsService', () => {
  let service: CupcakeDecorationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CupcakeDecorationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
