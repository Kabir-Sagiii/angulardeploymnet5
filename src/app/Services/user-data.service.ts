import { Injectable } from '@angular/core';

interface IProduct {
  id:number,
  title:string,
  price:number,
  description:string,
  image:string,
  rating:any,
  category:string
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

    userData:string = " "

  constructor() { }

   user:any = [
    {
      name:"S1",
      city:"hyd"
    },
    {
      name:"S2",
      city:"Banglore"
    },
    {
      name:"S3",
      city:"Pune"
    },
    {
      name:"S4",
      city:"Delhi"
    },
    {
      name:"S5",
      city:"Mumbai"
    }
  ]
   serverData:IProduct ={
    id:0,
    title:"",
    description:"",
    category:"",
    price:0,
    image:"",
    rating:{}
  }
  //  serverData:any
      serverCall(){
        fetch("https://fakestoreapi.com/products/1").then((res)=>{
          return res.json()
        }).then((actualData)=>{
          console.log(actualData)
           this.serverData = actualData
        })
      }
}
