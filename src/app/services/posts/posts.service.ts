import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { 
  }

  public getPosts = async () : Promise<Post[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json()) ?? [];
  }

  public getPostById = async(id: number) : Promise<Post> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    return (await response.json()) ?? null;
  }

}
