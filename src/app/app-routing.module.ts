import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './addproduct/add-product.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { FactoryComponent } from './factory/factory.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailesComponent } from './productdetailes/product-detailes.component';

const routes: Routes = [
  {path: '', component:FactoryComponent},
  {path: 'product', component:ProductComponent},
  {path: 'editproduct', component:EditproductComponent},
  {path: 'addproduct' , component:AddProductComponent},
  {path: 'productDetails' , component:ProductDetailesComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }