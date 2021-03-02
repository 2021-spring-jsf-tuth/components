import { TestBed } from '@angular/core/testing';

import { BearPickerService } from './bear-picker.service';

describe('BearPickerService', () => {
  let service: BearPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BearPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
