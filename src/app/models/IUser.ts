import {IAddress} from "./IAddress";
import {Icompany} from "./Icompany";

export  interface IUser {
  id:number;
  name: string;
  username: string;
  email:string;
  address:IAddress;
  phone:string;
  website:string;
  company:Icompany;
}
