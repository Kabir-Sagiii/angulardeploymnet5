import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../Service/products.service';

@Component({
  selector: 'app-singleproduct-details',
  templateUrl: './singleproduct-details.component.html',
  styleUrls: ['./singleproduct-details.component.css']
})
export class SingleproductDetailsComponent implements OnInit {
   id:any
   product:any
  constructor(private service:ProductsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id')
    this.getDataFromService()
   
   
  }
    getDataFromService(){
           this.service.getSpecificProductDetails(this.id).subscribe((data)=>{
             this.product = data
              console.log(data)
           })
    }

}
