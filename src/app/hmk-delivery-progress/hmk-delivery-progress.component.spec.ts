import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmkDeliveryProgressComponent } from './hmk-delivery-progress.component';

describe('HmkDeliveryProgressComponent', () => {
  let component: HmkDeliveryProgressComponent;
  let fixture: ComponentFixture<HmkDeliveryProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmkDeliveryProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmkDeliveryProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
