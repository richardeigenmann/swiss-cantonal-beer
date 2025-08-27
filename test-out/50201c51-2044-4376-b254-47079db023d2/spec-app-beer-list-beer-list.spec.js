import {
  BeerService,
  init_beer_service
} from "./chunk-IZUKZ37S.js";
import {
  TestBed,
  init_testing
} from "./chunk-3C54LSHI.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/beer-list/beer-list.spec.ts
var require_beer_list_spec = __commonJS({
  "src/app/beer-list/beer-list.spec.ts"(exports) {
    init_testing();
    init_beer_service();
    describe("BeerList", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [BeerService]
        }).compileComponents();
        fixture = TestBed.createComponent(BeerService);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_beer_list_spec();
//# sourceMappingURL=spec-app-beer-list-beer-list.spec.js.map
