import { Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats: Stat[] = [
    { value: '99.9%', label: 'Uptime' },
    { value: '500+', label: 'Clients' },
    { value: '10M+', label: 'API Calls/Day' },
    { value: '24/7', label: 'Support' }
  ];
}
