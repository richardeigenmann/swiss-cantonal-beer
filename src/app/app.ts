import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CantonService, Canton } from './canton-service';
import { FormsModule } from '@angular/forms';
import { BeerList } from "./beer-list/beer-list";
import { CookieBanner } from './cookie-banner/cookie-banner';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    BeerList,
    CookieBanner
],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})


export class App {
  protected readonly title = signal('swiss-cantonal-beer');
  private cantonService = inject(CantonService);
  cantons = this.cantonService.cantons;

  selectedCanton: Canton | null | undefined = null;;

  onSelectionChange(selectedCanton: string) {
    this.selectedCanton = this.cantonService.getCantonByCode(selectedCanton);
  }

}
