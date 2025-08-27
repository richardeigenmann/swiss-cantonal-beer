import {
  Injectable,
  __decorate,
  computed,
  init_core,
  init_tslib_es6,
  signal
} from "./chunk-3C54LSHI.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/canton-service.ts
var CantonService;
var init_canton_service = __esm({
  "src/app/canton-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    CantonService = class CantonService2 {
      _cantons = signal([
        { code: "AG", name: "Aargau", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Wappen_Aargau_matt.svg/40px-Wappen_Aargau_matt.svg.png" },
        { code: "AI", name: "Appenzell Innerrhoden", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Wappen_Appenzell_Innerrhoden_matt.svg/40px-Wappen_Appenzell_Innerrhoden_matt.svg.png" },
        { code: "AR", name: "Appenzell Ausserrhoden", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Wappen_Appenzell_Ausserrhoden_matt.svg/40px-Wappen_Appenzell_Ausserrhoden_matt.svg.png" },
        { code: "BE", name: "Bern", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/CHE_Bern_COA.svg/40px-CHE_Bern_COA.svg.png" },
        { code: "BL", name: "Basel-Landschaft", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Coat_of_arms_of_Kanton_Basel-Landschaft.svg/40px-Coat_of_arms_of_Kanton_Basel-Landschaft.svg.png" },
        { code: "BS", name: "Basel-Stadt", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wappen_Basel-Stadt_matt.svg/40px-Wappen_Basel-Stadt_matt.svg.png" },
        { code: "FR", name: "Freiburg", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Wappen_Freiburg_matt.svg/40px-Wappen_Freiburg_matt.svg.png" },
        { code: "GE", name: "Genf", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/CHE_Canton_de_Gen%C3%A8ve_%C3%A9cu_seul_COA.svg/40px-CHE_Canton_de_Gen%C3%A8ve_%C3%A9cu_seul_COA.svg.png" },
        { code: "GL", name: "Glarus", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Wappen_Glarus_matt.svg/40px-Wappen_Glarus_matt.svg.png" },
        { code: "GR", name: "Graub\xFCnden", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/CHE_Graub%C3%BCnden_COA.svg/40px-CHE_Graub%C3%BCnden_COA.svg.png" },
        { code: "JU", name: "Jura", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Wappen_Jura_matt.svg/40px-Wappen_Jura_matt.svg.png" },
        { code: "LU", name: "Luzern", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Wappen_Luzern_matt.svg/40px-Wappen_Luzern_matt.svg.png" },
        { code: "NE", name: "Neuenburg", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Wappen_Neuenburg_matt.svg/40px-Wappen_Neuenburg_matt.svg.png" },
        { code: "NW", name: "Nidwalden", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Wappen_Nidwalden_matt.svg/40px-Wappen_Nidwalden_matt.svg.png" },
        { code: "OW", name: "Obwalden", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wappen_Obwalden_matt.svg/40px-Wappen_Obwalden_matt.svg.png" },
        { code: "SG", name: "St. Gallen", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Coat_of_arms_of_canton_of_St._Gallen.svg/40px-Coat_of_arms_of_canton_of_St._Gallen.svg.png" },
        { code: "SH", name: "Schaffhausen", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Wappen_Schaffhausen_matt.svg/40px-Wappen_Schaffhausen_matt.svg.png" },
        { code: "SO", name: "Solothurn", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Wappen_Solothurn_matt.svg/40px-Wappen_Solothurn_matt.svg.png" },
        { code: "SZ", name: "Schwyz", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Wappen_Schwyz_matt.svg/40px-Wappen_Schwyz_matt.svg.png" },
        { code: "TG", name: "Thurgau", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Wappen_Thurgau_matt.svg/40px-Wappen_Thurgau_matt.svg.png" },
        { code: "TI", name: "Tessin", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wappen_Tessin_matt.svg/40px-Wappen_Tessin_matt.svg.png" },
        { code: "UR", name: "Uri", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Wappen_Uri_matt.svg/40px-Wappen_Uri_matt.svg.png" },
        { code: "VD", name: "Waadt", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Wappen_Waadt_matt.svg/40px-Wappen_Waadt_matt.svg.png" },
        { code: "VS", name: "Wallis", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wappen_Wallis_matt.svg/40px-Wappen_Wallis_matt.svg.png" },
        { code: "ZG", name: "Zug", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wappen_Zug_matt.svg/40px-Wappen_Zug_matt.svg.png" },
        { code: "ZH", name: "Z\xFCrich", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wappen_Z%C3%BCrich_matt.svg/40px-Wappen_Z%C3%BCrich_matt.svg.png" }
      ]);
      get cantons() {
        return this._cantons;
      }
      // A computed signal that generates a Map for fast lookups
      cantonsMap = computed(() => {
        const cantonMap = /* @__PURE__ */ new Map();
        this._cantons().forEach((canton) => {
          cantonMap.set(canton.code, canton);
        });
        return cantonMap;
      });
      getCantonByCode(code) {
        return this.cantonsMap().get(code);
      }
    };
    CantonService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], CantonService);
  }
});

export {
  CantonService,
  init_canton_service
};
//# sourceMappingURL=chunk-EM6UQEJM.js.map
