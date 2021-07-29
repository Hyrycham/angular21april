import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../models/IUser";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;
  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private router:Router)
  {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.userService.getUserById(id).subscribe(value=> this.user  = value)
    // });

    // console.log(history.state);
        // this.user  = this.router.getCurrentNavigation()?.extras.state as IUser;

    this.activatedRoute.params.subscribe(value => {
      this.user  = this.router.getCurrentNavigation()?.extras.state as IUser;
    })



  }

  ngOnInit(): void {
  }

  back() {
history.back()
  }
}
