import {FormArray} from '@angular/forms';
import {positionElements} from '@ng-bootstrap/ng-bootstrap/util/positioning';

export interface VacancyListItem {
  vacancyName: string;
  vacancyStatus: string;
  vacancyDescription: string;
  requirements: any;
  candidates: CandidateShortInfo[];
}

export interface CandidateShortInfo {
  id: number;
  candidateName: string;
  candidateSurname: string;
  position: string;
  phone: string;
  mail?: string;
  otherContacts?: string;
  photo?: string;
  notes?: string;
}

export enum Positions {
  Angular = 'Angular',
  React = 'React',
  Vue = 'Vue',
  PHP = 'PHP',
  Java = 'Java',
  JS = 'JS',
  TS = 'TS',
  HTML = 'HTML',
  CSS = 'CSS'
}

export enum Statuses {
  opened = 'opened',
  suspended = 'suspended',
  canceled = 'canceled',
  closed = 'closed'
}
