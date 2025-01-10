import { Component, inject } from '@angular/core';
import { CommonModule, Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';
import { Post } from '../../interfaces/post';



@Component({
  selector: 'app-detail-posts',
  standalone: true,
  imports: [],
  templateUrl: './detail-posts.component.html',
  styleUrl: './detail-posts.component.css'
})
export class DetailPostsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postService = inject(PostsService);
  post : Post| undefined;
  postId = -1;
  

  constructor(private location: Location) {
    const postId = Number(this.route.snapshot.params['id']);
    this.postService.getPostById(postId).then((post : Post) => {
      this.post = post 
    });
  }

  backClicked() {
    this.location.back();
  }
}
