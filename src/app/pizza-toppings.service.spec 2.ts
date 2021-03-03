import { TestBed } from '@angular/core/testing';

import { PizzaToppingsService } from './pizza-toppings.service';

describe('PizzaToppingsService', () => {
  let service: PizzaToppingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaToppingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
