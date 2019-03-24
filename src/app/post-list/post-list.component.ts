import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';
import {Post} from '../models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }
  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
