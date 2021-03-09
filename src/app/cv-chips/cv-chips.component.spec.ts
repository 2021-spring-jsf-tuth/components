import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvChipsComponent } from './cv-chips.component';

describe('CvChipsComponent', () => {
  let component: CvChipsComponent;
  let fixture: ComponentFixture<CvChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
