import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
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
    this.subscription$ = this.postService.getPostCollection().subscribe(result => {
      this.postCollection$ = result;
      this.isLoadingPage = false;
      console.error(result);

    }, err => {
        console.error(err);
      this.isLoadingPage = false;

    })

    // let newPost:Post=new Post();
    // newPost.id = 20001;
    // newPost.userId = 2001;
    // newPost.title = 'reza title';
    // newPost.body = 'reza Body';

    // this.postService.savePost(newPost).subscribe(result => {
    //   console.log(result)
    // })

  }

  changeView (){
    this.isTableView = !this.isTableView;
  }

}
