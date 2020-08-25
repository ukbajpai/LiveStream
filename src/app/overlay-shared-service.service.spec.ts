import { TestBed } from '@angular/core/testing';

import { OverlaySharedServiceService } from './overlay-shared-service.service';

describe('OverlaySharedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverlaySharedServiceService = TestBed.get(OverlaySharedServiceService);
    expect(service).toBeTruthy();
  });
});
