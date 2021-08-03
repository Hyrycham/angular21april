import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-choose-form',
  templateUrl: './users-choose-form.component.html',
  styleUrls: ['./users-choose-form.component.scss']
})
export class UsersChooseFormComponent implements OnInit {
  userQ={username:'vasya',
    password:'1111',
    status:true,
    gender: "male",
    level:'',
    id:1
  }
  constructor() {

  }

  ngOnInit(): void {
  }

  save(tref: HTMLFormElement){
    console.log(this.user)
    console.log(tref)
    // console.log(tref.username.value)
  }

}
