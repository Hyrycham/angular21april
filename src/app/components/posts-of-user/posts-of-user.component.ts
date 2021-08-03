import { Component, OnInit } from '@angular/core';
import {IPost} from "../../models/iPost";
import {IUser} from "../../models/iUser";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.scss']
})
export class PostsOfUserComponent implements OnInit {
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
