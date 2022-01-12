import { TestBed } from '@angular/core/testing';

import { LTOformProcessService } from './ltoform-process.service';

describe('LTOformProcessService', () => {
  let service: LTOformProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LTOformProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
