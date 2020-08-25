import { TestBed } from '@angular/core/testing';

import { AddCameraService } from './add-camera.service';

describe('AddCameraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCameraService = TestBed.get(AddCameraService);
    expect(service).toBeTruthy();
  });
});
