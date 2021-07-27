import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUser";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  posts: IPost[];
  user:IUser;
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getPostByUserId(id).subscribe(value=> this.posts  = value)
    })
     }

  ngOnInit(): void {
  }

}
