import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hg2021april';


constructor(private userService:UserService;) {
  this.userService.doSomeStuff();
}







}
