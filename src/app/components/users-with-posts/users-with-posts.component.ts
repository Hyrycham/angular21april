import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users-with-posts',
  templateUrl: './users-with-posts.component.html',
  styleUrls: ['./users-with-posts.component.scss']
})
export class UsersWithPostsComponent implements OnInit {

  users:IUser [];

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => { this.users = value; })
  }

}
