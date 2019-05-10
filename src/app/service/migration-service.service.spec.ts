import { TestBed } from '@angular/core/testing';

import { MigrationServiceService } from './migration-service.service';

describe('MigrationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MigrationServiceService = TestBed.get(MigrationServiceService);
    expect(service).toBeTruthy();
  });
});
