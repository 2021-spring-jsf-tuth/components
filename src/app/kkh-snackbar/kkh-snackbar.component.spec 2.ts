import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkhSnackbarComponent } from './kkh-snackbar.component';

describe('KkhSnackbarComponent', () => {
  let component: KkhSnackbarComponent;
  let fixture: ComponentFixture<KkhSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkhSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkhSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
