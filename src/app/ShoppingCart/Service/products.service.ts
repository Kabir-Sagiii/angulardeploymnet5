import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient) { }
       getProductDetails() {
       return  fetch("https://fakestoreapi.com/products")
       }

       getElectronicDetails() {
         return fetch("https://fakestoreapi.com/products/category/electronics")
       }
    
        getJewellaryDetails():Observable<any>{
       return   this.http.get<any>("https://fakestoreapi.com/products/category/jewelery")

        }
        getSpecificProductDetails(id:number):Observable<any>{
          
            return this.http.get<any>(`https://fakestoreapi.com/products/${id}`)
        }

}
