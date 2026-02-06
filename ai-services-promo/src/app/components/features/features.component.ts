import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: 'assets/icons/beaker.svg',
      title: 'Cutting-Edge Technology',
      description: 'Our AI models are built on the latest research, ensuring top-tier accuracy and performance.'
    },
    {
      icon: 'assets/icons/briefcase.svg',
      title: 'Business-Ready Solutions',
      description: 'Tailored AI services designed to integrate seamlessly into your existing business workflows.'
    },
    {
      icon: 'assets/icons/computer-desktop.svg',
      title: 'Easy Integration',
      description: 'Simple REST APIs and SDKs that let you get up and running in minutes, not months.'
    }
  ];
}
