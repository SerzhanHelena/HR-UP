import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInterviewButtonComponent } from './assign-interview-button.component';

describe('AssignInterviewButtonComponent', () => {
  let component: AssignInterviewButtonComponent;
  let fixture: ComponentFixture<AssignInterviewButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignInterviewButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInterviewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
