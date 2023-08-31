import { Component, OnInit } from '@angular/core';
import { experiences } from '../../experience';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  experiences = experiences;
}
