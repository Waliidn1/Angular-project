import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/post';
import { Inject } from '@angular/core';
import { Todos } from '../../interfaces/todos';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  // private listTodos: Todos[] = [];

  constructor () {
  }

  public getTodos = async () : Promise<Todos[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return (await res.json()) ?? [];
  }

}
