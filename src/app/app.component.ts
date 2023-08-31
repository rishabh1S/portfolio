import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';
  ngOnInit() {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
    });
  }
}
