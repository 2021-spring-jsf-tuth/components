import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JtsRiggedD20Component } from './jts-rigged-d20.component';

describe('JtsRiggedD20Component', () => {
  let component: JtsRiggedD20Component;
  let fixture: ComponentFixture<JtsRiggedD20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JtsRiggedD20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JtsRiggedD20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
