import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeSliderComponent } from './Components/HomeComponent/home-slider/home-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductComponent } from './Components/all-product/all-product.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeSliderComponent,
    AllProductComponent,
    HttpClientModule,
    NgxPaginationModule
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
