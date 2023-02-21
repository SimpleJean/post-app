import { Component, Input } from '@angular/core';

//mock data
import { Post } from '../../models/post';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
@Input() post!: Post;

@Input() comment!: Comment;

}
