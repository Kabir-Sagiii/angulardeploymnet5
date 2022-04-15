import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../Service/products.service"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsDetails:any = []
  constructor(private products:ProductsService) { }

  ngOnInit(): void {
      this.getProductDetailsFromService()
  }
      getProductDetailsFromService(){
         this.products.getProductDetails()
         .then((res)=>{ return res.json()})
         .then((actualData)=>{
             console.log(actualData)
             this.productsDetails = actualData
         })
      }

}
