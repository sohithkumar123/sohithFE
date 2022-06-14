import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoryComponent } from './factory/factory.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailesComponent } from './productdetailes/product-detailes.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AddProductComponent } from './addproduct/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    ProductComponent,
    ProductDetailesComponent,
    EditproductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
