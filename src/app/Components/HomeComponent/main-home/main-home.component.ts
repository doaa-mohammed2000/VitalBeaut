import { Component } from '@angular/core';
import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { RecentProductsComponent } from '../recent-products/recent-products.component';
import { AnimatedImagesComponent } from '../animated-images/animated-images.component';
import { NumbersComponent } from '../numbers/numbers.component';
import { OurStoryComponent } from '../our-story/our-story.component';
@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [HomeSliderComponent,AnimatedImagesComponent,NumbersComponent,OurStoryComponent,RecentProductsComponent],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.css'
})
export class MainHomeComponent {

}
