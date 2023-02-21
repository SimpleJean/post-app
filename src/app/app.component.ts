import { Component, OnInit } from '@angular/core';

import { Post } from './models/post';
import { Comment } from './models/comment';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts!: Post[];
  comments!: Comment[];

  constructor(private postService: PostService, private commentService: CommentService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      //console.log(posts);
    });
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
      //console.log(comments);
      
    })
  }
}
