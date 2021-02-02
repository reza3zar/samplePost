import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from '../models/Post';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }



  savePost(post: Post) {
    return this.http.post<any>("http://localhost:3000/posts",post).pipe(
      catchError(this.handleError)
    );

  }

  getPostCollection(): Observable<Post[]>{
    let headers = new HttpHeaders();
    headers = headers.append('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE0NjkyZTUwNWUxYTAwMjJkZTUyNTciLCJlbWFpbCI6InlvdW5lc2kubmltYTNAZ21haWwuY29tIiwiaWF0IjoxNjExOTUwMzk2fQ.oKFZCeHOnB8YQPD_1j1KjPa1Il2qNT7Wdsct1F0WTMw');
    return this.http.get<any>("https://postyserver.herokuapp.com/posts", { headers }).pipe(
      map(collection=>collection.result),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
