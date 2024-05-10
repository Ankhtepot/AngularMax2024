import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "./models/Post";
import {PostsService} from "./posts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSubscription: Subscription;
  private postsUpdatedSubscription: Subscription;

  constructor(
    private postsService: PostsService,
  ) {
  }

  ngOnInit() {
    this.errorSubscription = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.postsUpdatedSubscription = this.postsService.postsUpdated.subscribe(() => {
      this.onFetchPosts();
    });
    this.onFetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
    this.postsUpdatedSubscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData);
    this.loadedPosts.push(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      console.log('Posts deleted');
      this.loadedPosts = [];
    },error => {
      this.error = error.message;
    });
  }

  onErrorDismissed() {
    this.error = null;
  }

  async onSeedPosts() {
    this.postsService.seedPosts([
      {
        title: 'Post 1',
        content: 'This is post 1'
      },
      {
        title: 'Post 2',
        content: 'This is post 2'
      },
      {
        title: 'Post 3',
        content: 'This is post 3'
      },
    ])
  }
}
