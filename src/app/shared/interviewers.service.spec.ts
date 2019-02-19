import { TestBed } from '@angular/core/testing';

import { InterviewersService } from './interviewers.service';

describe('InterviewersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewersService = TestBed.get(InterviewersService);
    expect(service).toBeTruthy();
  });
});
