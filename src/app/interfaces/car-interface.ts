export interface ICar{
  id:number;
  model:string;
  price:number;
  year:number;
};

export interface ICarFull {
links:{
  next:string;
  prev:string;
},
count:number;
data:ICar[];

}
