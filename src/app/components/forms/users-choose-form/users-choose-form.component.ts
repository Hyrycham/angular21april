import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../models/iUser";


@Component({
  selector: 'app-users-choose-form',
  templateUrl: './users-choose-form.component.html',
  styleUrls: ['./users-choose-form.component.scss']
})
export class UsersChooseFormComponent implements OnInit {
  @Input()   users: IUser[];
  id= 0;

  constructor() {
      }

  ngOnInit(): void {
    console.log(this.users)

  }

  save(tref: HTMLFormElement){
       console.log(tref);
    console.log(this.id)

    // console.log(tref.username.value)
  }

}
