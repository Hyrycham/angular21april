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
import { UserPostsComponent } from './components/user-posts/user-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    UserPostsComponent
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
