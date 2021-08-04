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
import { TestUsersFormComponent } from './components/test-users-form/test-users-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestUsersFormsReactiveComponent } from './components/test-users-forms-reactive/test-users-forms-reactive.component';
import { UsersChooseFormComponent } from './components/forms/users-choose-form/users-choose-form.component';
import {CommonModule} from "@angular/common";
import { UsersChooseFormReactiveComponent } from './components/forms/users-choose-form-reactive/users-choose-form-reactive.component';


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
    TestUsersFormComponent,
    TestUsersFormsReactiveComponent,
    UsersChooseFormComponent,
    UsersChooseFormReactiveComponent,
     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
