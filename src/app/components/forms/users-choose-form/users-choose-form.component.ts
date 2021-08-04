import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../models/iUser";
import {ActivatedRoute, Router} from "@angular/router";
import {find} from "rxjs/operators";


@Component({
  selector: 'app-users-choose-form',
  templateUrl: './users-choose-form.component.html',
  styleUrls: ['./users-choose-form.component.scss']
})
export class UsersChooseFormComponent implements OnInit {
  @Input() users: IUser[];
  id = 0;
  user:IUser;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {

      }

  save(): void {
          this.router.navigate([this.id],
           {relativeTo: this.activatedRoute,
            state:this.users.find(value => {return (value.id==this.id)}) })
  }
}
