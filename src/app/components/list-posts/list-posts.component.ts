import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router'
import { CommonModule, Location} from '@angular/common';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts/posts.service';


@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
  public listPosts: Post[] = [];
  public postsService = inject(PostsService)

  constructor () {
    this.postsService.getPosts().then((posts :Post[]) => {
      this.listPosts = posts
    });
    
  }

    public deleteById = async (id:number)  =>  {
      await fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
        method: 'DELETE',
      });
      this.listPosts = this.listPosts.filter(post => post.id !== id)
    }

}
