import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  company: string|null ='';
  location: string | null='';
  data: any=[];
  formValue: any;
  products: any;
  dataService: any;
  original: any;

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.company=sessionStorage.getItem("company")
    this.location=sessionStorage.getItem("location")
    this.getProducts()
  }
getProducts(){
  this.http.get('http://localhost:9999/products').subscribe(
    (res)=>{
      console.log(res);
      this.data=res;
      
    }
  )
}
productdetails(data:any){
  console.log(JSON.stringify(data));
  
  sessionStorage.setItem('productDetails',JSON.stringify(data))
this.router.navigate(['/productDetails'])
}
deleteData(id:number):void {
  this.products = this.original = this.original.filter((p: { id: number; }) => p.id != id);

  this.dataService.deleteProduct(id).subscribe((res: any) => console.log(res));
}

}
