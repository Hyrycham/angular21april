import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UserDetailsComponent} from '../components/user-details/user-details.component';
import {Routes} from "@angular/router";
import {PostDetailsComponent} from '../components/post-details/post-details.component'
import {PostsOfUserComponent} from "../components/posts-of-user/posts-of-user.component";
import {UsersWithPostsComponent} from "../components/users-with-posts/users-with-posts.component";
import {UserGuardService} from "../services/user-guard.service";
import {CommentsComponent} from "../components/comments/comments.component";
import {UsersResolveService} from "../services/users-resolve.service";
import {TestUsersFormComponent} from "../components/test-users-form/test-users-form.component";
import {CommentsResolveService} from "../services/comments-resolve.service";
import {UserResolveService} from "../services/user-resolve.service";
import {PostsOfUserResolveService} from "../services/posts-of-user-resolve.service";
export let routesBasic:Routes =[
  // {
  //   path:'users',
  //   component: UsersComponent,
  //   children:[
  //     {path:':id',
  //       component: UserDetailsComponent,
  //       canActivate:[UserGuardService],
  //       resolve:{waitData:UserResolveService}},
  //     {  path:':id'+'/posts',
  //       component: PostsOfUserComponent,
  //       resolve:{waitData:PostsOfUserResolveService}}
  //   ],
  //   // canDeactivate:[UserGuardService],
  //   resolve:{xxx:UsersResolveService},
  //
  // },
  // {path:'posts', component: PostsComponent},
  // {path:'posts/:id', component: PostDetailsComponent},

  // {    path:'posts',  component: PostsComponent,
  //   children:[
  //     {
  //       path:':id',
  //       component: PostDetailsComponent,
  //       // children:[{path:'comments',component:CommentsComponent}]
  //     },
  //   ],
  // },

  {
    path:'userswithposts',
    component: UsersWithPostsComponent,
    resolve:{waitData:UsersResolveService}
  },
  {
    path:'comments',
    component: CommentsComponent,
    resolve:{waitData:CommentsResolveService},
  },
  {
    path:'test',
    component: TestUsersFormComponent,
  },
  // home page
  // {path:'', redirectTo : '', pathMatch:'full'},

  {
    path:'users', loadChildren: ()=> import('../user/user.module').then(m=>m.UserModule)
  },
  {
    path:'posts', loadChildren: ()=> import('../posts/posts.module').then(m=>m.PostsModule)
  },
]
