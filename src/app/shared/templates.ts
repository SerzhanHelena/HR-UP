import {FormControl, FormGroup} from '@angular/forms';
import {Interviews} from '../calendar/interviews.mock';

export class InterviewTemplate {
  tabId: number;
  form: FormGroup;
  currentDate: Date;
  recordId: number;
  personId: number;
  constructor(_personId: number, recordId: number) {
    this.personId = _personId;
    this.form = new FormGroup({
      currentDate: new FormControl(new Date()),
      when: new FormControl(new Date()),
      whoConducts: new FormControl(''),
      comments: new FormControl('')
    })
  }
}

export class ExperienceTemplate {
  form: FormGroup;
  currentDate: Date;
  personId: number;
  constructor(_personId: number) {
    this.personId = _personId;
    this.form = new FormGroup({
      currentDate: new FormControl(new Date()),
      companyName: new FormControl(''),
      yearsOfWork: new FormControl(''),
      position: new FormControl(''),
      comments: new FormControl(''),
      personId: new FormControl(this.personId)
    })
  }
}

export class NoteTemplate {
  form: FormGroup;
  personId: number;
  currentDate: Date;
  constructor(_personId: number) {
    this.personId = _personId;
    this.form = new FormGroup({
      currentDate: new FormControl(new Date()),
      when: new FormControl(''),
      author: new FormControl(''),
      note: new FormControl(''),
      personId: new FormControl(this.personId)
    })
  }
}
