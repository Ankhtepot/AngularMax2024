import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post(environment.postsUrl, postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.http.get(environment.postsUrl)
      .subscribe(posts => {
        console.log(posts);
        // this.loadedPosts = posts;
      });
  }

  onClearPosts() {
    // Send Http request

  }
}
