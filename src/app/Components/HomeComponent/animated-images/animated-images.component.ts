import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animated-images',
  standalone: true,
  imports: [],
  templateUrl: './animated-images.component.html',
  styleUrl: './animated-images.component.css'
})
export class AnimatedImagesComponent{
  constructor(private router: Router) { }

  navigateToAllProducts() 
  {
    this.router.navigate(['/AllProduct']);
  }
}
