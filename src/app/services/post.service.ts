import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/Post';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsSubject = new Subject<Post[]>();
  private posts: Post[] = [];
  emitPostSubject() {
    this.postsSubject.next(this.posts);
  }
  constructor() {
    this.getPosts();
  }
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
        }
      );
  }
  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPostSubject();
  }
  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPostSubject();
  }
  updateLoveIt() {
    firebase.database().ref('/posts')
                      .update(this.posts);
    this.emitPostSubject();
  }
}
