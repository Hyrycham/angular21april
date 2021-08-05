import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/iUser";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users-with-posts',
  templateUrl: './users-with-posts.component.html',
  styleUrls: ['./users-with-posts.component.scss']
})
export class UsersWithPostsComponent implements OnInit {

  users:IUser [];

  constructor(private  activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.users=value.waitData
    } )
  }

  ngOnInit(): void {
    //   this.userService.getAllUsers().subscribe(value => { this.users = value; })
    // }
  }
}
