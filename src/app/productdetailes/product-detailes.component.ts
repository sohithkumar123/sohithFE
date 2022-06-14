import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent implements OnInit {

  name: any = ''
  quantity: any = ''
  description: any = ''
  pData:any={}
  
  constructor() { }

  ngOnInit(): void {
    this.pData=(sessionStorage.getItem('productDetails'))
    console.log(this.pData);
    this.pData=JSON.parse(this.pData)
    this.name=this.pData.productName
    this.quantity=this.pData.quantity
    console.log(this.name,typeof(this.pData));
    
  }
}
