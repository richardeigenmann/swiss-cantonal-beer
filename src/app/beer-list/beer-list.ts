import { Component, signal, inject, Input, SimpleChanges, OnChanges } from '@angular/core';
import { BeerService, Beer } from '../beer-service';
import { Canton } from '../canton-service';

@Component({
  selector: 'app-beer-list',
  imports: [],
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.css',
  standalone: true
})
export class BeerList implements OnChanges { // This fixes both errors.
  @Input() selectedCanton: Canton | undefined;
  private cantonBeerService = inject(BeerService);

  protected beers = signal<Beer[] | undefined>(undefined);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCanton']) {
      const canton = changes['selectedCanton'].currentValue;
      if (canton) {
        const beersForCanton = this.cantonBeerService.getBeersByCanton(canton.code);
        this.beers.set(beersForCanton);
      } else {
        this.beers.set(undefined);
      }
    }
  }
}