import { Component, signal, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BeerService, Beer } from '../beer-service';
import { Canton } from '../canton-service';

@Component({
  selector: 'app-beer-list',
  imports: [],
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.css',
  standalone: true
})

export class BeerList {
  @Input() selectedCanton: Canton | undefined;
  private cantonBeerService = inject(BeerService); // Inject the new service

  // A signal to hold the list of beers to be displayed
  protected beers = signal<Beer[] | undefined>(undefined);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCanton']) {
      const canton = changes['selectedCanton'].currentValue;
      if (canton) {
        // Fetch beers and update the signal
        const beersForCanton = this.cantonBeerService.getBeersByCanton(canton.code);
        this.beers.set(beersForCanton);
      } else {
        // If canton is null or undefined, clear the beers list
        this.beers.set(undefined);
      }
    }
  }
}
