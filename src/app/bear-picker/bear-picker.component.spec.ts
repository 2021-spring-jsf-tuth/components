import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearPickerComponent } from './bear-picker.component';

describe('BearPickerComponent', () => {
  let component: BearPickerComponent;
  let fixture: ComponentFixture<BearPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
