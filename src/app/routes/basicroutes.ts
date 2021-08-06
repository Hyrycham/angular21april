import {Routes} from "@angular/router";
export let routesBasic:Routes =[

  {
    path:'users', loadChildren: ()=> import('../user/user.module').then(m=>m.UserModule)
  },
  {
    path:'posts', loadChildren: ()=> import('../posts/posts.module').then(m=>m.PostsModule)
  },
]
