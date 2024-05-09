import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {Post} from "./models/Post";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(postData: Post) {
    return this.http.post<{ name: string }>(environment.postsUrl, postData)
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams().set('print', 'pretty');
    searchParams = searchParams.append('custom', 'Hello');

    return this.http.get<{ [key: string]: Post }>(
      environment.postsUrl,
      {
        headers: new HttpHeaders({
          'Custom-Header': 'Hello'
        }),
        params: searchParams
      }
    )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              const post = responseData[key];
              postsArray.push(new Post(post.title, post.content, key));
            }
          }
          return postsArray;
        }),
        catchError(error => {
          // Send to analytics
          return throwError(error);
        })
      );
  }

  deletePosts() {
    return this.http.delete(environment.postsUrl);
  }
}
