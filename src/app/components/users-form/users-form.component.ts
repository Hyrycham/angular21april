import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
user={username:'vasya',
  password:'1111',
status:true,
gender: "male",
  level:''
}
  constructor() {
  // setTimeout(()=>{
  //   this.user.username='kokos';
  // },5000)

  }

  ngOnInit(): void {
  }

  save(tref: HTMLFormElement){
  console.log(this.user)
    console.log(tref)
    // console.log(tref.username.value)
  }

}
