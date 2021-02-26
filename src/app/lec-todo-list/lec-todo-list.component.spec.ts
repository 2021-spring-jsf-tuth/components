import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecTodoListComponent } from './lec-todo-list.component';

describe('LecTodoListComponent', () => {
  let component: LecTodoListComponent;
  let fixture: ComponentFixture<LecTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
