import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users-forms-reactive',
  templateUrl: './users-forms-reactive.component.html',
  styleUrls: ['./users-forms-reactive.component.scss']
})
export class UsersFormsReactiveComponent implements OnInit {
myForm : FormGroup = new FormGroup({username: new FormControl('vasya')});

  constructor() { }

  ngOnInit(): void {
  }

}
