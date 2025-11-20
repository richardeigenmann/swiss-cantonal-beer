import { Component, computed, inject, input } from '@angular/core';
import { BeerService } from '../beer-service';

@Component({
  selector: 'app-beer-list',
  imports: [],
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.css',
  standalone: true
})
export class BeerList { // This fixes both errors.
  selectedCanton = input<string | undefined>();
  beerService = inject(BeerService)

  beers = computed(() => {
    const currentCanton = this.selectedCanton();
    if (currentCanton) {
      return this.beerService.getBeersByCanton(currentCanton);
    } else {
      return undefined;
    }
  });
}