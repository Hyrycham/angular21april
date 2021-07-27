import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {console.log(value.id)})
  }

  ngOnInit(): void {
  }

}
