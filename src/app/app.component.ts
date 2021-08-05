import { Component } from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hg2021april';

  constructor(private  dataService:DataService) {
    // this.dataService.dataCell.getValue();
    this.dataService.getCurrentValue().subscribe(value => this.title=value)
  }

  incrementDataCell() {
    let value= this.dataService.getSnapShotValue();
    this.dataService.setNewValue(++value)

  }
}
