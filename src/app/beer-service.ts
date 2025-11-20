import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Beer {
  name: string;
  brewery: string;
  imageUrl?: string;
}

export type CantonBeerMap = Record<string, Beer[]>;

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private readonly BEER_DATA_URL = 'https://raw.githubusercontent.com/richardeigenmann/swiss-cantonal-beer/refs/heads/main/workshop/beerlist.json';
  private readonly _cantonBeers = signal<CantonBeerMap>({});


  // Expose the signal as read-only for use in components
  readonly cantonBeers: Signal<CantonBeerMap> = this._cantonBeers.asReadonly();

  private http = inject(HttpClient);

  constructor() {
    this.loadBeers();
  }

  /**
   * Fetches beer data from the remote URL and updates the signal.
   * Components should call this method to load the data.
   */
  loadBeers(): void {
    console.log('Fetching beer data from URL...');
    (this.http.get(this.BEER_DATA_URL) as Observable<CantonBeerMap>)
      .pipe(
        tap(data => {
          console.log('Beer data loaded successfully.');
          this._cantonBeers.set(data);
        })
      )
      .subscribe({
        error: (error) => console.error('Failed to load beer data', error)
      });
  }

  // Method to get a specific canton's beers
  getBeersByCanton(cantonCode: string): Beer[] | undefined {
    return this._cantonBeers()[cantonCode];
  }

}