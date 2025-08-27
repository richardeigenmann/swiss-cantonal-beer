import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6,
  signal
} from "./chunk-3C54LSHI.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/beer-service.ts
var BeerService;
var init_beer_service = __esm({
  "src/app/beer-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    BeerService = class BeerService2 {
      _cantonBeers = signal({
        "AG": [
          { name: "Feldblume", brewery: "Brauerei L\xE4gereBr\xE4u" },
          { name: "Warteck", brewery: "Brauerei Warteck" }
        ],
        "AI": [
          { name: "Qu\xF6llfrisch", brewery: "Brauerei Locher" }
        ],
        "AR": [
          { name: "Klostermann", brewery: "Brauerei Sch\xFCtzengarten" }
        ],
        "BE": [
          { name: "Eichhof", brewery: "Brauerei Eichhof" },
          { name: "Felsenau", brewery: "Brauerei Felsenau" }
        ],
        "BS": [
          { name: "Ueli", brewery: "Brauerei Fischerstube" },
          { name: "Ziegelhof", brewery: "Brauerei Ziegelhof" }
        ],
        "FR": [
          { name: "Cardinal", brewery: "Brauerei Cardinal" }
        ],
        "GE": [
          { name: "La Genevoise", brewery: "Brasserie des Murailles" }
        ],
        "GR": [
          { name: "Calanda", brewery: "Brauerei Calanda" },
          { name: "Moonstein", brewery: "Brauerei Monstein" }
        ],
        "LU": [
          { name: "Lager", brewery: "Brauerei Luzern" }
        ],
        "NE": [
          { name: "Bi\xE8re du Donjon", brewery: "Brasserie du Donjon" }
        ],
        "OW": [
          { name: "Sarnenbr\xE4u", brewery: "Brauerei Sarnen" }
        ],
        "SG": [
          { name: "St. Galler", brewery: "Brauerei Sch\xFCtzengarten" }
        ],
        "SH": [
          { name: "Falken", brewery: "Brauerei Falken" }
        ],
        "SO": [
          { name: "\xD6ufi", brewery: "Brauerei \xD6ufi" }
        ],
        "SZ": [
          { name: "Schwyzer Lager", brewery: "Brauerei Rosengarten" }
        ],
        "TG": [
          { name: "Thurbr\xE4u", brewery: "Brauerei Thurbr\xE4u" }
        ],
        "TI": [
          { name: "Vallemaggia", brewery: "Birrificio Vallemaggia" }
        ],
        "UR": [
          { name: "Seiler", brewery: "Brauerei Seiler" }
        ],
        "VS": [
          { name: "Valaisanne", brewery: "Brasserie Valasienne, Sion" }
        ],
        "VD": [
          { name: "Lausanne", brewery: "Brasserie de Lausanne" }
        ],
        "ZG": [
          { name: "Baarer Bier", brewery: "Brauerei Baar" }
        ],
        "ZH": [
          { name: "Turbinenbr\xE4u", brewery: "Turbinenbr\xE4u" },
          { name: "Haldengut", brewery: "Brauerei Haldengut" },
          { name: "Chopfab", brewery: "Chopfab Boxer AG, Winterthur" }
        ]
      });
      // Expose the signal as read-only for use in components
      cantonBeers = this._cantonBeers.asReadonly();
      // Method to get a specific canton's beers
      getBeersByCanton(cantonCode) {
        return this._cantonBeers()[cantonCode];
      }
    };
    BeerService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], BeerService);
  }
});

export {
  BeerService,
  init_beer_service
};
//# sourceMappingURL=chunk-LOKNEOS5.js.map
