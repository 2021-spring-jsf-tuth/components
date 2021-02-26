import { TestBed } from '@angular/core/testing';

import { LecTodoListService } from './lec-todo-list.service';

describe('LecTodoListService', () => {
  let service: LecTodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecTodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
