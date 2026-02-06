import { Component, Input } from '@angular/core';
import { ApiSection } from '../../models/api-section.model';

@Component({
  selector: 'app-api-section',
  standalone: true,
  templateUrl: './api-section.component.html',
  styleUrl: './api-section.component.css'
})
export class ApiSectionComponent {
  @Input({ required: true }) section!: ApiSection;
}
