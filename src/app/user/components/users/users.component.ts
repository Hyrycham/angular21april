import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  currentDataCellValue: any;

  constructor(private  dataService:DataService) { }

  ngOnInit(): void {

    this.dataService.getCurrentValue().subscribe(value => this.currentDataCellValue=value)

  }

  decrementDataCellValue() {
    let value= this.dataService.getSnapShotValue();
    this.dataService.setNewValue(--value);
  }
}
