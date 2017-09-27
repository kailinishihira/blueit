import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

<<<<<<< HEAD

=======
>>>>>>> 544a044710e39a63ae5e19352971fc5063a653c5
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  providers: [PostService]
})
<<<<<<< HEAD

=======
>>>>>>> 544a044710e39a63ae5e19352971fc5063a653c5
export class PopularComponent implements OnInit {

  posts: Post[];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
<<<<<<< HEAD

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  };

=======
>>>>>>> 544a044710e39a63ae5e19352971fc5063a653c5
}
