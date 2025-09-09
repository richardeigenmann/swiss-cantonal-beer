import { Component, inject, signal } from '@angular/core';
import { SelectCanton } from "./select-canton/select-canton";
import { CantonService } from './canton-service';
import { FormsModule } from '@angular/forms';
import { BeerList } from "./beer-list/beer-list";
import { CookieBanner } from './cookie-banner/cookie-banner';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    SelectCanton,
    BeerList,
    CookieBanner,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})


export class App {
  protected readonly title = signal('swiss-cantonal-beer');
  private cantonService = inject(CantonService);
  cantons = this.cantonService.cantons;

  selectedCantonCode = signal<string>('');
  onCantonChanged(cantonCode: string) {
    this.selectedCantonCode.set(cantonCode);
  }

}
