import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TodosService } from '../../services/todos/todos.service';
import { Todos } from '../../interfaces/todos';


@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [ RouterModule, CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  public listTodos: Todos[] = [];
  public toDosService = inject(TodosService)

  constructor () {
    this.toDosService.getTodos().then((todos :Todos[]) => {
      this.listTodos = todos
    });
  }

}
