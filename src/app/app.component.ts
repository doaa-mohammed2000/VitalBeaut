import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { SearchComponent } from './Components/search/search.component';
import { FAQComponent } from './Components/faq/faq.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductComponent } from './Components/all-product/all-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeBrandsComponent } from './Components/HomeComponent/home-brands/home-brands.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    AboutComponent,
    AddToCartComponent,
    SearchComponent,
    FAQComponent,
    ContactComponent,
    FooterComponent,
    HttpClientModule,
    AllProductComponent,
    NgxPaginationModule,
    ContactComponent,
    HomeBrandsComponent,
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndPart';
  showScrollToTop = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollToTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
