import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingMathComponent } from './doing-math.component';

describe('DoingMathComponent', () => {
  let component: DoingMathComponent;
  let fixture: ComponentFixture<DoingMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoingMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
