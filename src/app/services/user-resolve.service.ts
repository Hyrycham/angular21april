import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";
// import {IUser} from "../models/iUser";
@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<any>{

  constructor(private  userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.userService.getAllUsers();
  }
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  //   return new Promise((res,reject)=>{
  //     setTimeout(()=>{
  //       res(this.userService.getAllUsers())
  //     },5000);
  //   });
  // }
}
