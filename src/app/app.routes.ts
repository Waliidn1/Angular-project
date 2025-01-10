import { Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { DetailPostsComponent } from './components/detail-posts/detail-posts.component';
import { DetailTodosComponent } from './components/detail-todos/detail-todos.component';

export const routes: Routes = [{
    path: '',
    component: ListPostsComponent,
    title: 'List Posts',
  }, 
  {
    path: 'todos',
    component: ListTodosComponent,
    title: 'List todos',
  },
  {
    path: 'post/detail-list/:id',
    component: DetailPostsComponent,
    title: 'Detail Post',
  },
  {
    path: 'todos/detail-list/:id',
    component: DetailTodosComponent,
    title: 'Detail todos',
  }
];
