import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [PostService]
})
export class SplashComponent implements OnInit {

  posts: Post[];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  };

filterByCategory: string = "allAnimals";

onChange(optionFromMenu) {
  this.filterByCategory = optionFromMenu;
}

}
