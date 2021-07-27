import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes/basicroutes";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';
import { UserWithPostsComponent } from './components/user-with-posts/user-with-posts.component';
import { UsersWithPostsComponent } from './components/users-with-posts/users-with-posts.component';


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
    UsersWithPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
