import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ICarFull} from "../../interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
carFull:ICarFull;

  constructor(private  activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({cars})=> {
      this.carFull = cars;
      this.router.navigate(['cars'],{state:this.carFull.data})
    })
  }

}
