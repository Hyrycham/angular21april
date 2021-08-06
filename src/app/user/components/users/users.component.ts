import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {IUser} from "../../../models/iUser";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit,OnDestroy {
  users:IUser [];
  currentDataCellValue: any;
  selectedUser:IUser;


  constructor(private  dataService:DataService,  private usersService:UsersService) { }

  ngOnInit(): void {

    this.dataService.getCurrentValue().subscribe(value => this.currentDataCellValue=value)
    this.usersService.getAllUsers().subscribe(value => { this.users = value; })
  }

  decrementDataCellValue() {
    let value= this.dataService.getSnapShotValue();
    this.dataService.setNewValue(--value);
  }

  cathEE(obj:IUser) {
    this.selectedUser=obj;
       console.log(this.selectedUser)
  }
  ngOnDestroy():void {

  }


}



