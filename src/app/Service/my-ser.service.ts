import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MySerService {

  constructor(private product:HttpClient) { }
  getProducts()
  {
    let url="assets/productBrands.json";
    return this.product.get(url);
  }
}
