import {
  BeerService,
  init_beer_service
} from "./chunk-LOKNEOS5.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6,
  inject,
  signal
} from "./chunk-3C54LSHI.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/beer-list/beer-list.html
var beer_list_default;
var init_beer_list = __esm({
  "angular:jit:template:src/app/beer-list/beer-list.html"() {
    beer_list_default = '@if ( selectedCanton !== null && selectedCanton !== undefined ) {\n  <div class="beer-list-container">\n    <h1 class="canton-title"><img class="flag" src="{{ selectedCanton.flag }}" alt="{{selectedCanton.name}}"> Beers from {{ selectedCanton.name }}</h1>\n    @if (beers(); as beersList) {\n      @if (beersList.length > 0) {\n        <ul>\n          @for (beer of beersList; track beer.name) {\n            <li>{{ beer.name }} - {{ beer.brewery }}</li>\n          }\n        </ul>\n      } @else {\n        <p>No beers found for this canton.</p>\n      }\n    } @else {\n      <p>Please select a canton to view its beers.</p>\n    }\n  </div>\n}\n';
  }
});

// angular:jit:style:src/app/beer-list/beer-list.css
var beer_list_default2;
var init_beer_list2 = __esm({
  "angular:jit:style:src/app/beer-list/beer-list.css"() {
    beer_list_default2 = "/* src/app/beer-list/beer-list.css */\n.beer-list-container {\n  background-color: rgba(255, 255, 255, 0.7);\n  margin: 20px;\n  padding: 20px;\n}\n.canton-title {\n  display: flex;\n  align-items: top;\n}\n.flag {\n  width: 60px;\n  height: auto;\n  margin-right: 12px;\n}\n/*# sourceMappingURL=beer-list.css.map */\n";
  }
});

// src/app/beer-list/beer-list.ts
var BeerList;
var init_beer_list3 = __esm({
  "src/app/beer-list/beer-list.ts"() {
    "use strict";
    init_tslib_es6();
    init_beer_list();
    init_beer_list2();
    init_core();
    init_beer_service();
    BeerList = class BeerList2 {
      selectedCanton;
      cantonBeerService = inject(BeerService);
      beers = signal(void 0);
      ngOnChanges(changes) {
        if (changes["selectedCanton"]) {
          const canton = changes["selectedCanton"].currentValue;
          if (canton) {
            const beersForCanton = this.cantonBeerService.getBeersByCanton(canton.code);
            this.beers.set(beersForCanton);
          } else {
            this.beers.set(void 0);
          }
        }
      }
      static propDecorators = {
        selectedCanton: [{ type: Input }]
      };
    };
    BeerList = __decorate([
      Component({
        selector: "app-beer-list",
        imports: [],
        template: beer_list_default,
        standalone: true,
        styles: [beer_list_default2]
      })
    ], BeerList);
  }
});

export {
  BeerList,
  init_beer_list3 as init_beer_list
};
//# sourceMappingURL=chunk-OAUNNFBB.js.map
