import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiaD8RollerComponent } from './bia-d8-roller.component';

describe('BiaD8RollerComponent', () => {
  let component: BiaD8RollerComponent;
  let fixture: ComponentFixture<BiaD8RollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiaD8RollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiaD8RollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
