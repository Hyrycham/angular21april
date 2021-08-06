import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from "./components/post/post.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailsComponent,
      ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,

  ],
  exports:[
    PostsComponent,
    HttpClientModule,
  ],
  providers:[]
})
export class PostsModule { }
