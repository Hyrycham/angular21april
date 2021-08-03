import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/iUser";
import {IPost} from "../../models/iPost";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-with-posts',
  templateUrl: './user-with-posts.component.html',
  styleUrls: ['./user-with-posts.component.scss']
})
export class UserWithPostsComponent implements OnInit {
  @Input()
  user: IUser;

  posts:IPost[];

  constructor(private userService:UserService ) { }

  ngOnInit(): void {
      this.userService.getPostByUserId(this.user.id).subscribe(value=> {this.posts=value});
   }
}
