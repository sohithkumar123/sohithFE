import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  productdetails(company: any, location: any) {
    sessionStorage.setItem("company", company)
      sessionStorage.setItem("location", location)
    this.router.navigate(['/product'])
  }

}
