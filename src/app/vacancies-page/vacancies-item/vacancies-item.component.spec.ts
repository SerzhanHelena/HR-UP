import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesItemComponent } from './vacancies-item.component';

describe('VacanciesItemComponent', () => {
  let component: VacanciesItemComponent;
  let fixture: ComponentFixture<VacanciesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanciesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
