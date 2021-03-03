import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDateComponent } from './reservation-date.component';

describe('ReservationDateComponent', () => {
  let component: ReservationDateComponent;
  let fixture: ComponentFixture<ReservationDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
