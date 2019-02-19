import { TestBed } from '@angular/core/testing';

import { TimeLineListService } from './time-line-list.service';

describe('TimeLineListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeLineListService = TestBed.get(TimeLineListService);
    expect(service).toBeTruthy();
  });
});
