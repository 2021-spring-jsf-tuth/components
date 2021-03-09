import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcmCatGeneratorComponent } from './jcm-cat-generator.component';

describe('JcmCatGeneratorComponent', () => {
  let component: JcmCatGeneratorComponent;
  let fixture: ComponentFixture<JcmCatGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JcmCatGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JcmCatGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
