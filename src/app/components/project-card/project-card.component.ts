import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() index!: number;
  @Input() name!: string;
  @Input() description!: string;
  @Input() tags!: any[];
  @Input() image!: string;
  @Input() hostLink!: string;
  @Input() sourceCodeLink!: string;

  openSourceCodeLink() {
    window.open(this.sourceCodeLink, '_blank');
  }
  openHostLink() {
    window.open(this.hostLink, '_blank');
  }
}
