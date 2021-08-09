import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar, ICarFull} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ICarFull> {
 return this.httpClient.get<ICarFull>(urls.cars)
  }

getById(id:number):Observable<ICar>{
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`)
}

}
