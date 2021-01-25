import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/Model/Post';
import { PostService } from '../post.service';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})


export class PostListComponent implements OnInit,OnDestroy {
  postCollection$: Post[] = [];
  isLoadingPage = true;
  subscription$: Subscription;
  isTableView = false;
  constructor(private postService:PostService) { }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngOnInit(): void {
    // setTimeout to show loading
setTimeout(() => {
  this.subscription$ = this.postService.getPostCollection().subscribe(result => {
    this.postCollection$ = result;
    this.isLoadingPage = false;
  })
}, 2000);

  }

  changeView (){
    this.isTableView = !this.isTableView;
  }

}
