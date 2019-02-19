import {Positions} from '../vacancies-page/shared/templates';

export class Interview {
  constructor(){
    this.currentDate = new Date();
  }
  id?: number;
  candidateName: string;
  candidateSurname: string;
  position: string;
  interviewers: string[];
  date:  Date;
  notes?: string;
  phone: string;
  mail: string;
  otherContacts: string;
  photo: string;
  currentDate?: Date;
}
