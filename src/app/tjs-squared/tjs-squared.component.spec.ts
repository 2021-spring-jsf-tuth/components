import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsSquaredComponent } from './tjs-squared.component';

describe('TjsSquaredComponent', () => {
  let component: TjsSquaredComponent;
  let fixture: ComponentFixture<TjsSquaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TjsSquaredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsSquaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
