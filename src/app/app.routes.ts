import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { BrandComponent } from './brand/brand.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BrandAdminDashboardComponent } from './brand-admin-dashboard/brand-admin-dashboard.component';
import { SiteAdminDashboardComponent } from './site-admin-dashboard/site-admin-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: "Home", component: HomeComponent },
    { path: "About", component: AboutComponent },
    { path: 'Rigester', component: RegisterComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'Faq', component: FAQComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Brand', component: BrandComponent },
    { path: "AddToCart", component: AddToCartComponent },
    { path: "BrandAdminDashboard", component: BrandAdminDashboardComponent },
    { path: 'SitAdminDashboard', component: SiteAdminDashboardComponent },
    { path: 'Payment', component: PaymentComponent },
    { path: 'ProductDetails', component: ProductDetailsComponent },
    { path: "Search", component: SearchComponent },
    { path: "Shop", component: ShopComponent }
] 
