import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LalAdditionComponent } from './lal-addition.component';

describe('LalAdditionComponent', () => {
  let component: LalAdditionComponent;
  let fixture: ComponentFixture<LalAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LalAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LalAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
