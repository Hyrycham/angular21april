import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {AppComponent} from "../app.component";
import {UserDetailsComponent} from '../components/user-details/user-details.component';
import {Routes} from "@angular/router";
import {PostDetailsComponent} from '../components/post-details/post-details.component'
import {UserPostsComponent} from "../components/user-posts/user-posts.component";
export let routes:Routes =[
  {
    path:'users',
    component: UsersComponent,
    children:[
      {path:':id',component: UserDetailsComponent},
      {path:':id'+'/posts',component: UserPostsComponent},
    ]
  },
  // {path:'users/id:', component: UserDetailsComponent},
  {
    path:'posts',
    component: PostsComponent,
    children:[
      {path:':id',component: PostDetailsComponent}
    ]
    },
  {path:'', component: AppComponent},
]
