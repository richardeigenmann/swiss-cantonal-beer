// src/app/canton-beer.service.ts
import { Injectable, signal, Signal, computed } from '@angular/core';

export interface Beer {
  name: string;
  brewery: string;
}

export interface CantonBeerMap {
  [key: string]: Beer[];
}

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private readonly _cantonBeers = signal<CantonBeerMap>({
    'AG': [
      { name: 'Feldblume', brewery: 'Brauerei LägereBräu' },
      { name: 'Warteck', brewery: 'Brauerei Warteck' }
    ],
    'AI': [
      { name: 'Quöllfrisch', brewery: 'Brauerei Locher' }
    ],
    'AR': [
      { name: 'Klostermann', brewery: 'Brauerei Schützengarten' }
    ],
    'BE': [
      { name: 'Eichhof', brewery: 'Brauerei Eichhof' },
      { name: 'Felsenau', brewery: 'Brauerei Felsenau' }
    ],
    'BS': [
      { name: 'Ueli', brewery: 'Brauerei Fischerstube' },
      { name: 'Ziegelhof', brewery: 'Brauerei Ziegelhof' }
    ],
    'FR': [
      { name: 'Cardinal', brewery: 'Brauerei Cardinal' }
    ],
    'GE': [
      { name: 'La Genevoise', brewery: 'Brasserie des Murailles' }
    ],
    'GR': [
      { name: 'Calanda', brewery: 'Brauerei Calanda' },
      { name: 'Moonstein', brewery: 'Brauerei Monstein' }
    ],
    'LU': [
      { name: 'Lager', brewery: 'Brauerei Luzern' }
    ],
    'NE': [
      { name: 'Bière du Donjon', brewery: 'Brasserie du Donjon' }
    ],
    'OW': [
      { name: 'Sarnenbräu', brewery: 'Brauerei Sarnen' }
    ],
    'SG': [
      { name: 'St. Galler', brewery: 'Brauerei Schützengarten' }
    ],
    'SH': [
      { name: 'Falken', brewery: 'Brauerei Falken' }
    ],
    'SO': [
      { name: 'Öufi', brewery: 'Brauerei Öufi' }
    ],
    'SZ': [
      { name: 'Schwyzer Lager', brewery: 'Brauerei Rosengarten' }
    ],
    'TG': [
      { name: 'Thurbräu', brewery: 'Brauerei Thurbräu' }
    ],
    'TI': [
      { name: 'Vallemaggia', brewery: 'Birrificio Vallemaggia' }
    ],
    'UR': [
      { name: 'Seiler', brewery: 'Brauerei Seiler' }
    ],
    'VS': [
      { name: 'Chopfab', brewery: 'Brauerei Doppelleu' }
    ],
    'VD': [
      { name: 'Lausanne', brewery: 'Brasserie de Lausanne' }
    ],
    'ZG': [
      { name: 'Baarer Bier', brewery: 'Brauerei Baar' }
    ],
    'ZH': [
      { name: 'Turbinenbräu', brewery: 'Turbinenbräu' },
      { name: 'Haldengut', brewery: 'Brauerei Haldengut' }
    ]
  });

  // Expose the signal as read-only for use in components
  readonly cantonBeers: Signal<CantonBeerMap> = this._cantonBeers.asReadonly();

  // Method to get a specific canton's beers
  getBeersByCanton(cantonCode: string): Beer[] | undefined {
    return this._cantonBeers()[cantonCode];
  }

}