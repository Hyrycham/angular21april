import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../interfaces";
import {urls} from '../../constants';
import {UsersService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
user:IUser;
  constructor(private userService:UsersService) { }



  ngOnInit(): void {
  }

  getId(id: number) {
this.userService.getById(id).subscribe(value =>this.user=value )
  }
}
