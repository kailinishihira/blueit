import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  providers: [PostService]
})
export class PopularComponent implements OnInit {

  posts: Post[];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
