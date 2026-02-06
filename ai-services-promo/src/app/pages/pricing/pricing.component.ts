import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: ['1,000 API calls/day', '2 AI models', 'Community support', 'Basic analytics'],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      features: ['50,000 API calls/day', 'All AI models', 'Priority support', 'Advanced analytics', 'Custom integrations'],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited API calls', 'Custom AI models', 'Dedicated support', 'Full analytics suite', 'SLA guarantee', 'On-premise deployment'],
      highlighted: false
    }
  ];
}
