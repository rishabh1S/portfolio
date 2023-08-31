import {
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.css'],
})
export class CustomCursorComponent implements OnInit {
  @ViewChild('cursorDot', { static: true }) cursorDot!: ElementRef;
  @ViewChild('cursorOutline', { static: true }) cursorOutline!: ElementRef;

  constructor(private renderer: Renderer2, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('mousemove', this.onMouseMove.bind(this));
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Handle window resize if needed
  }

  onMouseMove(event: MouseEvent): void {
    const posX = event.clientX;
    const posY = event.clientY;

    this.renderer.setStyle(this.cursorDot.nativeElement, 'left', `${posX}px`);
    this.renderer.setStyle(this.cursorDot.nativeElement, 'top', `${posY}px`);

    this.cursorOutline.nativeElement.animate(
      [{ left: `${posX}px`, top: `${posY}px` }],
      {
        duration: 800,
        fill: 'forwards',
      }
    );
  }
}
