import { Component, OnInit } from '@angular/core';
import {IUserModel} from "../models/userModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   users :IUserModel[]=[
    {name:'vasya',age:31,status:true},
    {name:'petya',age:25,status:true},
    {name:'olga',age:51,status:true},
    {name:'denis',age:26,status:false},
    {name:'katya',age:24,status:false},
    {name:'sasha',age:35,status:true},
    {name:'oleg',age:21,status:true},
    {name:'pit',age:81,status:false},
  ];











  constructor() { }

  ngOnInit(): void {
  }

}
