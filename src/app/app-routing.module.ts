import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {routesBasic} from "./routes/basicroutes";

// const routes: Routes = [
//   // {
//   //   path:'users',
//   //   component: UsersComponent,
//   //   children:[
//   //     {path:':id',
//   //       component: UserDetailsComponent,
//   //       canActivate:[UserGuardService],
//   //       resolve:{waitData:UserResolveService}},
//   //     {  path:':id'+'/posts',
//   //       component: PostsOfUserComponent,
//   //       resolve:{waitData:PostsOfUserResolveService}}
//   //   ],
//   //   // canDeactivate:[UserGuardService],
//   //   resolve:{xxx:UsersResolveService},
//   //
//   // },
//   // {path:'posts', component: PostsComponent},
//   // {path:'posts/:id', component: PostDetailsComponent},
//
//   {    path:'posts',  component: PostsComponent,
//     children:[
//       {
//         path:':id',
//         component: PostDetailsComponent,
//         // children:[{path:'comments',component:CommentsComponent}]
//       },
//     ],
//   },
//
//   {
//     path:'userswithposts',
//     component: UsersWithPostsComponent,
//     resolve:{waitData:UsersResolveService}
//   },
//   {
//     path:'comments',
//     component: CommentsComponent,
//     resolve:{waitData:CommentsResolveService},
//   },
//   {
//     path:'test',
//     component: TestUsersFormComponent,
//   },
//   // home page
//   // {path:'', redirectTo : '', pathMatch:'full'},
//
//   {
//     path:'users', loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)
//   },
//
// ];

const routes: Routes = routesBasic;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
