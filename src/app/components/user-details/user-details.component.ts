import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../models/iUser";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  // @Input() user: IUser;
  dataInfo:string;
  user: IUser;
  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private router:Router)
  {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.userService.getUserById(id).subscribe(value=> this.user  = value)
    // });
///////////////////////////////////
    // console.log(history.state);
        // this.user  = this.router.getCurrentNavigation()?.extras.state as IUser;
////////////////////////////////////
//     this.activatedRoute.params.subscribe(value => {
//       this.user  = this.router.getCurrentNavigation()?.extras.state as IUser;
//           })
  ///////////////////////////////////////

    if(this.router.getCurrentNavigation()?.extras.state){
      this.activatedRoute.params.subscribe(value => {
        this.user  = this.router.getCurrentNavigation()?.extras.state as IUser;
                // console.log('state'+this.user?.id);
        this.dataInfo='USER`S  data getting from STATE';
      })
    }
    else {
      this.activatedRoute.data.subscribe(value => {
        this.user=value.waitData
        this.dataInfo='USER`S data getting from API'
      } )
      // this.activatedRoute.params.subscribe(({id}) => {
      //   this.userService.getUserById(id).subscribe(value=> {
      //     this.user = value;
      //     // console.log('get'+this.user?.id);
      //     this.dataInfo='USER`S data getting from API'
      //        });
      //
      // })
    }





 }

  ngOnInit(): void {
  }

  back() {
history.back()
  }
}
