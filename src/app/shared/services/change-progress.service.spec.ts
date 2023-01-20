import { TestBed } from '@angular/core/testing';

import { ChangeProgressService } from './change-progress.service';

describe('ChangeProgressService', () => {
  let service: ChangeProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
