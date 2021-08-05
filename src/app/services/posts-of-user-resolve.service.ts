import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class PostsOfUserResolveService {

  constructor(private  userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.userService.getPostByUserId(route.params.id);
  }
}
