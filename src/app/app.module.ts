import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes/basicroutes";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';
import { UserWithPostsComponent } from './components/user-with-posts/user-with-posts.component';
import { UsersWithPostsComponent } from './components/users-with-posts/users-with-posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersFormsReactiveComponent } from './components/users-forms-reactive/users-forms-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    PostsOfUserComponent,
    UserWithPostsComponent,
    UsersWithPostsComponent,
    CommentsComponent,
    CommentComponent,
    UsersFormComponent,
    UsersFormsReactiveComponent,
     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
