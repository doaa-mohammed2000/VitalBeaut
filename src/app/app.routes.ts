import { Routes } from '@angular/router';
import { MainHomeComponent } from './Components/HomeComponent/main-home/main-home.component';
import { AboutComponent } from './Components/about/about.component';
import { RegisterComponent } from './Components/register/register.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FAQComponent } from './Components/faq/faq.component';
import { LoginComponent } from './Components/login/login.component';
import { BrandComponent } from './Components/brand/brand.component';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { BrandAdminDashboardComponent } from './Components/brand-admin-dashboard/brand-admin-dashboard.component';
import { SiteAdminDashboardComponent } from './Components/site-admin-dashboard/site-admin-dashboard.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SearchComponent } from './Components/search/search.component';
import { ShopComponent } from './Components/shop/shop.component';
import { AllProductComponent } from './Components/all-product/all-product.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: MainHomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Register', component: RegisterComponent },  
    { path: 'Contact', component: ContactComponent },    
    { path: 'FAQ', component: FAQComponent },            
    { path: 'Login', component: LoginComponent },
    { path: 'Brand', component: BrandComponent },
    { path: 'AddToCart', component: AddToCartComponent },
    { path: 'BrandAdminDashboard', component: BrandAdminDashboardComponent },
    { path: 'SiteAdminDashboard', component: SiteAdminDashboardComponent },
    { path: 'Payment', component: PaymentComponent },
    { path: 'ProductDetails', component: ProductDetailsComponent },
    { path: 'Search', component: SearchComponent },
    { path: 'Shop', component: ShopComponent },
    { path: 'AllProduct', component: AllProductComponent },
];
