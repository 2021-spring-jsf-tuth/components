import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JhProgressBarComponent } from './jh-progress-bar.component';

describe('JhProgressBarComponent', () => {
  let component: JhProgressBarComponent;
  let fixture: ComponentFixture<JhProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JhProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JhProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
