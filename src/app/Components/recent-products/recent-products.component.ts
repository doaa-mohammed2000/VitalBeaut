import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-products',
  standalone: true,
  imports: [],
  templateUrl: './recent-products.component.html',
  styleUrl: './recent-products.component.css'
})
export class RecentProductsComponent {
  constructor() { }
  ngOnInit() { }

  url1: string = "/assets/product11.jpg";
  changeImage1(event: any) {
    this.url1 = event.target.src;
  }

  url2: string = "/assets/product21.jpg";
  changeImage2(event: any) {
    this.url2 = event.target.src;
  }
  url3: string = "/assets/product31.jpg";
  changeImage3(event: any) {
    this.url3 = event.target.src;
  }
  url4: string = "/assets/product41.jpg";
  changeImage4(event: any) {
    this.url4 = event.target.src;
  }
}
