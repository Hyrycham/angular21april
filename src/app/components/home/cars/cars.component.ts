import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ICar} from "../../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
cars:ICar[];
  constructor(private router:Router) {
    this.cars=this.router.getCurrentNavigation()?.extras.state as ICar[];
    console.log(this.cars)
      }

  ngOnInit(): void {
  }

}
