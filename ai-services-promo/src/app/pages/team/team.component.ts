import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  members = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former AI researcher at Stanford with 15+ years of experience in machine learning.',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO',
      bio: 'Ex-Google engineer specializing in large-scale distributed AI systems.',
      avatar: '👨‍💻'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader with a passion for making AI accessible to businesses of all sizes.',
      avatar: '👩‍🔬'
    },
    {
      name: 'David Kim',
      role: 'Lead ML Engineer',
      bio: 'Published researcher in NLP and computer vision with 50+ papers.',
      avatar: '🧑‍🔬'
    }
  ];
}
