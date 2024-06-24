import { Component, OnInit } from '@angular/core';
import { GetallProductsService } from '../../Services/getall-products.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products: any[] = [];
  p: number = 1;
  itemsPerPage: number = 2;
  totalProductNumber: any;


  constructor(private allproducts: GetallProductsService) { }

  ngOnInit() {
    this.allproducts.getProducts().subscribe(response => {
      this.products = response;
      this.totalProductNumber = response.length;
    });
  }
}
