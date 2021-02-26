import { Component, OnInit } from '@angular/core';
import { LecTodoListService, LecTodoListDisplay } from '../lec-todo-list.service'

@Component({
  selector: 'app-lec-todo-list',
  templateUrl: './lec-todo-list.component.html',
  styleUrls: ['./lec-todo-list.component.css']
})
export class LecTodoListComponent implements OnInit {

  constructor(private todoSvc: LecTodoListService) { }

  todoList : LecTodoListDisplay[] = [];

  ngOnInit(): void {
    this.todoList = this.todoSvc.loadTodos();
  }

}
