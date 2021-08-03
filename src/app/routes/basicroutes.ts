import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UserDetailsComponent} from '../components/user-details/user-details.component';
import {Routes} from "@angular/router";
import {PostDetailsComponent} from '../components/post-details/post-details.component'
import {PostsOfUserComponent} from "../components/posts-of-user/posts-of-user.component";
import {UsersWithPostsComponent} from "../components/users-with-posts/users-with-posts.component";
import {UserGuardService} from "../services/user-guard.service";
import {CommentsComponent} from "../components/comments/comments.component";
export let routes:Routes =[
  {
    path:'users',
    component: UsersComponent,
    children:[
      {path:':id',component: UserDetailsComponent, canActivate:[UserGuardService]},
      {path:':id'+'/posts',component: PostsOfUserComponent, }
    ],
    canDeactivate:[UserGuardService],
  },
  // {path:'posts', component: PostsComponent},
  // {path:'posts/:id', component: PostDetailsComponent},

  {    path:'posts',  component: PostsComponent,
    children:[
      {
        path:':id',
        component: PostDetailsComponent,
        // children:[{path:'comments',component:CommentsComponent}]
      },
    ],
  },

  {
    path:'userswithposts',
    component: UsersWithPostsComponent,

  },
  {
    path:'comments',
    component: CommentsComponent,

  },
  // home page
  // {path:'', redirectTo : '', pathMatch:'full'},

]
