import {IAddress} from "./iAddress";
import {ICompany} from "./iCompany";

export  interface IUser {
  id:number;
  name: string;
  username: string;
  email:string;
  address:IAddress;
  phone:string;
  website:string;
  company:ICompany;
}
