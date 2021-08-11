import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../../services";
import {IUser} from "../../../interfaces";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
form:FormGroup;
users:IUser[];
@Output()
event=new EventEmitter<number>();
  constructor(private  usersServise:UsersService) { }

  ngOnInit(): void {
  this.form= new FormGroup({
    userId: new FormControl(1)
  });
  this.usersServise.getAll().subscribe(value => this.users=value);
    this.event.emit(this.form.controls.userId.value)
  }

  getUserId(): void {
this.event.emit(this.form.controls.userId.value)
  }
}
