import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {CandidatesService} from './candidates.service';
import {Positions, VacancyListItem} from '../vacancies-page/shared/templates';

@Injectable()
export class VacanciesService {
  constructor(private service: CandidatesService) {
    this.pushCandidates();
  }

  vacanciesList: VacancyListItem[] = [
    {
      vacancyName: Positions.Angular,
      vacancyStatus: 'opened',
      vacancyDescription: 'Nothing to say... Sample text Sample text Sample text',
      requirements: new FormArray([
          new FormGroup({
            reqName: new FormControl('Whatever'),
            isRequire: new FormControl(true),
            isPublic: new FormControl(false)
          }),
          new FormGroup({
            reqName: new FormControl('Sample text'),
            isRequire: new FormControl(false),
            isPublic: new FormControl(true)
          }),
          new FormGroup({
            reqName: new FormControl('Sample text'),
            isRequire: new FormControl(true),
            isPublic: new FormControl(true)
          })
        ]
      ),
      candidates: []
    },
    {
      vacancyName: Positions.Java,
      vacancyStatus: 'closed',
      vacancyDescription: 'Nothing to say... Sample text Sample text Sample text',
      requirements: new FormArray([
          new FormGroup({
            reqName: new FormControl(''),
            isRequire: new FormControl(false),
            isPublic: new FormControl(false)
          })
        ]
      ),
      candidates: []
    },
    {
      vacancyName: Positions.Vue,
      vacancyStatus: 'opened',
      vacancyDescription: 'Nothing to say... Sample text Sample text Sample text',
      requirements: new FormArray([
          new FormGroup({
            reqName: new FormControl(''),
            isRequire: new FormControl(false),
            isPublic: new FormControl(false)
          })
        ]
      ),
      candidates: []
    }
  ];

  pushCandidates() {
    for (let i = 0; i < this.vacanciesList.length; i++) {
      for (let j = 0; j < this.service.candidatesList.length; j++) {
        if( this.service.candidatesList[j].position == this.vacanciesList[i].vacancyName) {
          this.vacanciesList[i].candidates.push(this.service.candidatesList[j]);
        }
      }
    }
  }

  addVacancy(item: VacancyListItem) {
    this.vacanciesList.push(item);
  }

  changeVacancy(index: number, item: VacancyListItem) {
    this.vacanciesList[index] = item;
  }
}
