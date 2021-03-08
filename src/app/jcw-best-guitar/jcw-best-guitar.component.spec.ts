import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcwBestGuitarComponent } from './jcw-best-guitar.component';

describe('JcwBestGuitarComponent', () => {
  let component: JcwBestGuitarComponent;
  let fixture: ComponentFixture<JcwBestGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JcwBestGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JcwBestGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
