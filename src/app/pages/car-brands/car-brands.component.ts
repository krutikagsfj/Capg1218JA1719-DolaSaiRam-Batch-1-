import { Component, OnInit } from '@angular/core';
import { MySerService } from 'src/app/Service/my-ser.service';
@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.css']
})
export class CarBrandsComponent implements OnInit {
  

  resData;
  constructor(private pser:MySerService){}
  ngOnInit() 
  {
    this.pser.getProducts()
    .subscribe(res=>
      {
        this.resData=res;
        console.log(res);
      },err=>
      {
        console.log(err);
      })
  }

}
