import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsD20RollerComponent } from './tjs-d20-roller.component';

describe('TjsD20RollerComponent', () => {
  let component: TjsD20RollerComponent;
  let fixture: ComponentFixture<TjsD20RollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TjsD20RollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsD20RollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
