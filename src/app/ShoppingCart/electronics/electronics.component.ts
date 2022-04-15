import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Service/products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  constructor(private products:ProductsService) { }
  electronicData:any
  ngOnInit(): void {
    this.getElectronicsData()
  }

     getElectronicsData(){
        this.products.getElectronicDetails().then((res)=>{
            return res.json()
        }).then((data)=>{
          console.log(data)
          this.electronicData = data
        })
     }

}
