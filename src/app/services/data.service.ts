import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

private dataCell:BehaviorSubject<any>= new BehaviorSubject<any>(0)
  constructor() { }
  setNewValue(value:any){

    this.dataCell.next(value)
    }
getCurrentValue(){

    return this.dataCell
  }
  getSnapShotValue(){

      return this.dataCell.getValue()

  }

}
