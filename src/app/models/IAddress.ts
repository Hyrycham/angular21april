import {Igeo} from "./Igeo";

export interface IAddress {
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  geo:Igeo;
}
