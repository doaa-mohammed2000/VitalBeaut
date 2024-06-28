import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-reviews.component.html',
  styleUrls: ['./client-reviews.component.css']
})
export class ClientReviewsComponent {
  reviews = [
    {
      image: 'assets/client1.jpg',
      stars: 4.5,
      text: 'This is a great service! I am very satisfied with the quality and the team.',
      name: 'Dr.Mona Elsayed',
      role:"Skin Therapist"
    },
    {
      image: 'assets/client2.jpg',
      stars: 4.0,
      text: 'Excellent customer service and attention to detail.',
      name: 'Dr.Basma Ehab',
      role:"Hair Therapist"
    },
    {
      image: 'assets/client3.jpg',
      stars: 5.0,
      text: 'Absolutely wonderful experience from start to finish!',
      name: 'Dr.Alia ElHosany',
      role:"Aesthetician"
    },
  ];

  currentReviewIndex = 0;

  get currentReview() {
    return this.reviews[this.currentReviewIndex];
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return [
      ...Array(fullStars).fill('fa-star'),
      ...Array(halfStar).fill('fa-star-half-alt'),
      ...Array(emptyStars).fill('fa-star-o')
    ];
  }

  hasPreviousReview(): boolean {
    return this.currentReviewIndex > 0;
  }

  hasNextReview(): boolean {
    return this.currentReviewIndex < this.reviews.length - 1;
  }

  previousReview() {
    if (this.hasPreviousReview()) {
      this.currentReviewIndex--;
    }
  }

  nextReview() {
    if (this.hasNextReview()) {
      this.currentReviewIndex++;
    }
  }
}
