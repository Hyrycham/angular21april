import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/iUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

users:IUser [];

  // constructor(private userService:UserService) {
    constructor(private  activatedRoute:ActivatedRoute) {
      this.activatedRoute.data.subscribe(value => {
      this.users=value.xxx
      } )
}

  ngOnInit(): void {
    // this.userService.getAllUsers().subscribe(value => { this.users = value; })
  }

}
