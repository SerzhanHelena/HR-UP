import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddExperienceInfoButtonComponent } from './app-add-experience-info-button.component';

describe('AppAddExperienceInfoButtonComponent', () => {
  let component: AppAddExperienceInfoButtonComponent;
  let fixture: ComponentFixture<AppAddExperienceInfoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAddExperienceInfoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddExperienceInfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
