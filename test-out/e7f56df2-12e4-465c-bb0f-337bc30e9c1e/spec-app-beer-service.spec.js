import {
  BeerService,
  init_beer_service
} from "./chunk-LOKNEOS5.js";
import {
  TestBed,
  init_testing
} from "./chunk-3C54LSHI.js";
import "./chunk-TTULUY32.js";

// src/app/beer-service.spec.ts
init_testing();
init_beer_service();
describe("BeerService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-beer-service.spec.js.map
