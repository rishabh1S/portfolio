import { Component, AfterViewInit } from '@angular/core';
import { TweenMax, Power3, Expo } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  isDarkMode: boolean = false;
  isMobileMenuOpen: boolean = false;

  constructor() {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.toggleDarkMode(true);
    } else {
      this.toggleDarkMode(false);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  ngAfterViewInit() {
    this.animate();
  }

  toggleDarkMode(isDark: boolean): void {
    this.isDarkMode = isDark;

    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }

  animate() {
    TweenMax.from('#logo', 1, {
      opacity: 0,
      x: -30,
      ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom('#navbar-default ul li', 1, {
      opacity: 0,
      x: -30,
      ease: Power3.easeInOut,
    });
  }
}
