import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  imports: [],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.css',
  standalone: true
})

export class CookieBanner {
  cookieAccepted(): boolean {
    return localStorage.getItem('cookieAccepted') === 'true';
  }

  acceptCookies(): void {
    localStorage.setItem('cookieAccepted', 'true');
  }
}
