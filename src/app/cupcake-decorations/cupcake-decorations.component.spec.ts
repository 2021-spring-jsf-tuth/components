import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeDecorationsComponent } from './cupcake-decorations.component';

describe('CupcakeDecorationsComponent', () => {
  let component: CupcakeDecorationsComponent;
  let fixture: ComponentFixture<CupcakeDecorationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupcakeDecorationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupcakeDecorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
