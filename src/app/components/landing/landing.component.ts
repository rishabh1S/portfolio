import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TweenMax, Expo } from 'gsap';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('canvas3d')
  canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    this.animate();
    const app = new Application(this.canvas.nativeElement);
    app.load('https://prod.spline.design/W6uyBEckRXO5706O/scene.splinecode');
  }

  animate() {
    TweenMax.from(this.canvas.nativeElement, 1, {
      opacity: 0,
      delay: 0.1,
      ease: Expo.easeInOut,
    });

    TweenMax.from('#heading', 1, {
      opacity: 0,
      delay: 0.6,
      y: 40,
      ease: Expo.easeInOut,
    });

    TweenMax.from('#sub-heading', 1, {
      opacity: 0,
      delay: 0.9,
      y: 40,
      ease: Expo.easeInOut,
    });

    TweenMax.from('#cta', 1, {
      opacity: 0,
      delay: 1.2,
      y: 40,
      ease: Expo.easeInOut,
    });

    TweenMax.from('#socials', 2, {
      opacity: 0,
      delay: 1.2,
      y: -40,
      ease: Expo.easeInOut,
    });
  }
}
