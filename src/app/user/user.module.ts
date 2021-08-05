import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import {UserService} from "../services/user.service";


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[UserService]
})
export class UserModule { }
