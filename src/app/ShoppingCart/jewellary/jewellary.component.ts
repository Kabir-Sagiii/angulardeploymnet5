import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../Service/products.service'

@Component({
  selector: 'app-jewellary',
  templateUrl: './jewellary.component.html',
  styleUrls: ['./jewellary.component.css']
})
export class JewellaryComponent implements OnInit {
  jewellaryDetails:any = []
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
      this.getJewellaryDataFromService()
  }
      getJewellaryDataFromService(){
         this.product.getJewellaryDetails().subscribe((data)=>{
                console.log(data)
                this.jewellaryDetails = data
         })
      }

}
