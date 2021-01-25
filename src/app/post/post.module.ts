import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';

const postRoutes: Routes = [
  { path: '', component: PostListComponent }
];

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes),
    SharedModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
