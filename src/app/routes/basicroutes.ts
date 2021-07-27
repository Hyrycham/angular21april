import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {AppComponent} from "../app.component";
import {UserDetailsComponent} from '../components/user-details/user-details.component';
import {Routes} from "@angular/router";

export let routes:Routes =[
  {
    path:'users',
    component: UsersComponent,
    children:[
      {path:':id',component: UserDetailsComponent}
    ]
  },
  // {path:'users/id:', component: UserDetailsComponent},
  {path:'posts', component: PostsComponent},
  {path:'', component: AppComponent},
]
