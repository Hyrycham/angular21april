import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../models/iUser";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  dataInfo:string;
  user: IUser;
  constructor(
    private activatedRoute:ActivatedRoute,
    private usersService:UsersService,
    private router:Router)
  {

    if(this.router.getCurrentNavigation()?.extras.state){
      this.activatedRoute.params.subscribe(value => {
        this.user  = this.router.getCurrentNavigation()?.extras.state as IUser;
                      this.dataInfo='USER`S  data getting from STATE';
      })
    }
    else {

      this.activatedRoute.params.subscribe(({id}) => {
        this.usersService.getUserById(id).subscribe(value=> {
          this.user = value;
                  this.dataInfo='USER`S data getting from API'
             });

      })
    }





 }

  ngOnInit(): void {
  }

  back() {
history.back()
  }
}
