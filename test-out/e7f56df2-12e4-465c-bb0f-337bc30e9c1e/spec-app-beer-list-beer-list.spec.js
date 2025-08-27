import {
  BeerList,
  init_beer_list
} from "./chunk-OAUNNFBB.js";
import {
  BeerService,
  init_beer_service
} from "./chunk-LOKNEOS5.js";
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
    init_beer_list();
    init_beer_service();
    describe("BeerList", () => {
      let component;
      let fixture;
      let mockBeerService;
      beforeEach(() => __async(null, null, function* () {
        mockBeerService = jasmine.createSpyObj("BeerService", ["getBeersByCanton"]);
        yield TestBed.configureTestingModule({
          imports: [BeerList],
          // Import the standalone component
          providers: [
            // Provide the mock service so the component can use it
            { provide: BeerService, useValue: mockBeerService }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(BeerList);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_beer_list_spec();
//# sourceMappingURL=spec-app-beer-list-beer-list.spec.js.map
