import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = [
    {
      title: 'NLP API',
      description: 'Natural language understanding, sentiment analysis, entity extraction, and text generation.',
      icon: '🧠'
    },
    {
      title: 'Vision API',
      description: 'Image classification, object detection, OCR, and facial recognition.',
      icon: '👁️'
    },
    {
      title: 'Speech API',
      description: 'Speech-to-text, text-to-speech, and real-time voice translation.',
      icon: '🎙️'
    },
    {
      title: 'Recommendation Engine',
      description: 'Personalized content and product recommendations powered by deep learning.',
      icon: '⚡'
    },
    {
      title: 'Anomaly Detection',
      description: 'Real-time monitoring and anomaly detection for fraud prevention and system health.',
      icon: '🔍'
    },
    {
      title: 'AutoML Platform',
      description: 'Build, train, and deploy custom machine learning models without writing code.',
      icon: '🤖'
    }
  ];
}
