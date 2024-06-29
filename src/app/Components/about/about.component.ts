import { Component, OnInit } from '@angular/core';
import { NumbersComponent } from '../numbers/numbers.component';
import { OurStoryComponent } from '../our-story/our-story.component';
import { ClientReviewsComponent } from '../client-reviews/client-reviews.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [NumbersComponent, OurStoryComponent, ClientReviewsComponent, OurTeamComponent]
})
export class AboutComponent implements OnInit {
  router: any;
  ngOnInit() {
    const modal: HTMLElement | null = document.getElementById("videoModal");
    const popupVideo: HTMLVideoElement | null = document.getElementById("popup-video") as HTMLVideoElement;
    const aboutVideo: HTMLImageElement | null = document.getElementById("about-video") as HTMLImageElement;
    const span: HTMLElement | null = document.getElementsByClassName("close")[0] as HTMLElement;

    if (aboutVideo && modal && popupVideo && span) {
      aboutVideo.onclick = function () {
        modal.style.display = "block";
        popupVideo.play();
      }
      span.onclick = function () {
        modal.style.display = "none";
        popupVideo.pause();
        popupVideo.currentTime = 0;
      }

      window.onclick = function (event: MouseEvent) {
        if (event.target === modal) {
          modal.style.display = "none";
          popupVideo.pause();
          popupVideo.currentTime = 0;
        }
      }
    } else {
      console.error("One or more elements could not be found.");
    }
  }
  constructor(private route: Router) { }
  navigateToShopPage() 
  {
    this.route.navigate(['/Shop']);
  }
}
