import {Component, Input, OnInit} from '@angular/core';
import {ILinks} from "../../../interfaces";
import {Router} from "@angular/router";
import {CarService} from "../../../services";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input()
  links:ILinks;
  constructor(private router:Router, private carService:CarService) { }

  ngOnInit(): void {
  }

  next() {

      this.carService.getAll(this.links.next).subscribe(value => {
        console.log(value)
      })


  }

  prev() {

  }
}
