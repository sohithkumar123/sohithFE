import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name: any = ''
  quantity: any = ''
  description: any = ''
  router: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  addProduct() {
    console.log(this.description, this.quantity, this.name);
    const data = {
      "productName": this.name,
      "quantity": this.quantity,
      "description": this.description
    }
    this.http.post("http://localhost:9999/products",data).subscribe(
      (res)=>{
        alert("Product added succesfully")
        this.router.navigate(['/productdetails']);
      }
    )
  }

}
