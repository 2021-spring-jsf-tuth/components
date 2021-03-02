import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsRollD6Component } from './tjs-roll-d6.component';

describe('TjsRollD6Component', () => {
  let component: TjsRollD6Component;
  let fixture: ComponentFixture<TjsRollD6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TjsRollD6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsRollD6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
