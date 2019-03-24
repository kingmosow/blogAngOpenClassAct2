import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Post} from '../models/Post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: ['', Validators.required]
    });
  }
  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost =  new Post(
      formValue.title,
      formValue.content,
      formValue.loveIts
    );
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
