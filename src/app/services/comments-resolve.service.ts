import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";
import {CommentsService} from "./comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<any>{

  constructor(private  commentsService: CommentsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.commentsService.getAllComments();
  }
}
