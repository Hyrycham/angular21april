import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   users :IUser[]=[
    {id:0, name:'vasya',  username:'aaaaa545aaaaa',age:31,status:true },
    {id:2, name:'petya',username:'aaaa4545aaaaaa',age:25,status:true},
    {id:3, name:'olga',username:'aaaaaaa5aaa',age:51,status:true},
    {id:4, name:'denis',username:'aaa5aa45a5a5aaa',age:26,status:false},
    {id:56, name:'katya',username:'aaaa45aaaa5aa',age:24,status:false},
    {id:57, name:'sasha',username:'aaaa45a5aaaaa',age:35,status:true},
    {id:8, name:'oleg',username:'aaaaa5454aa555aaa',age:21,status:true},
    {id:90, name:'pit',username:'45',age:81,status:false},
  ];

rt:IUser={id:1,name:'wwww',we:'ewewr'}









  constructor() { }

  ngOnInit(): void {
  }

}
