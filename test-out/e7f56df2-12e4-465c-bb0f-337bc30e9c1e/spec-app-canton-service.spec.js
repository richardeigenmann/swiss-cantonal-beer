import {
  CantonService,
  init_canton_service
} from "./chunk-EM6UQEJM.js";
import {
  TestBed,
  init_testing
} from "./chunk-3C54LSHI.js";
import "./chunk-TTULUY32.js";

// src/app/canton-service.spec.ts
init_testing();
init_canton_service();
describe("CantonService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantonService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-canton-service.spec.js.map
