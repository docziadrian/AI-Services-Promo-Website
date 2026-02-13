import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    navLinks = [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Team', path: '/team' },
      { name: 'Contact', path: '/contact' }
    ];

    redirect(link: string) {
      window.location.href = link;
    }
}
