import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdmSlideToggleComponent } from './mdm-slide-toggle.component';

describe('MdmSlideToggleComponent', () => {
  let component: MdmSlideToggleComponent;
  let fixture: ComponentFixture<MdmSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdmSlideToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdmSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
