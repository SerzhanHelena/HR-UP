import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateShortInfoComponent } from './candidate-short-info.component';

describe('CandidateShortInfoComponent', () => {
  let component: CandidateShortInfoComponent;
  let fixture: ComponentFixture<CandidateShortInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateShortInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateShortInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
