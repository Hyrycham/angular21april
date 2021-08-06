import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

private dataCell:BehaviorSubject<any>= new BehaviorSubject<any>(0)
  constructor() { }
  setNewValue(value:any){
  if (true){
    this.dataCell.next(value)
  }    }
getCurrentValue(){
  if(true){
    return this.dataCell
  }
}
  getSnapShotValue(){
    if(true){
      return this.dataCell.getValue()
    }
  }

}
