import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post;

  constructor(private postService: PostService) {
  }
  //
  onLoveIt() {
    this.post.loveIts = this.post.loveIts + 1;
    this.postService.updateLoveIt();
  }
  onDontLoveIt() {
    this.post.loveIts = this.post.loveIts - 1;
    this.postService.updateLoveIt();
  }
  onDelete() {
    console.log(this.post);
    this.postService.removePost(this.post);
  }
  ngOnInit() {
  }

}
