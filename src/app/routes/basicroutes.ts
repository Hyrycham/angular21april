import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UserDetailsComponent} from '../components/user-details/user-details.component';
import {Routes} from "@angular/router";
import {PostDetailsComponent} from '../components/post-details/post-details.component'
import {PostsOfUserComponent} from "../components/posts-of-user/posts-of-user.component";
import {UsersWithPostsComponent} from "../components/users-with-posts/users-with-posts.component";
export let routes:Routes =[
  {
    path:'users',
    component: UsersComponent,
    children:[
      {path:':id',component: UserDetailsComponent},
      {path:':id'+'/posts',component: PostsOfUserComponent},
    ]
  },
  // {path:'posts', component: PostsComponent},
  // {path:'posts/:id', component: PostDetailsComponent},

  {    path:'posts',  component: PostsComponent,
    children:[{path:':id',component: PostDetailsComponent} ]},

  {
    path:'userswithposts',
    component: UsersWithPostsComponent,

  },

  // home page
  // {path:'', redirectTo : '', pathMatch:'full'},

]
