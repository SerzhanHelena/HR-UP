import {Injectable, Input, TemplateRef} from '@angular/core';
import {Interview} from './interview-model';
import {Interviews} from './interviews.mock';
import {CalendarEvent} from 'angular-calendar';
import {endOfHour, startOfHour} from 'date-fns';
import {CandidatesService} from '../shared/candidates.service';
import {InterviewersService} from '../shared/interviewers.service';
import {CandidateShortInfo} from '../vacancies-page/shared/templates';
import {InterviewTemplate} from '../shared/templates';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  @Input() cellTemplate: TemplateRef<any>;

  candidateNames;
  interviewersNames;
  candidatesPhone;

  constructor(private candidatesService: CandidatesService, private interviewersService: InterviewersService) {}

  getCandidates() {
    return this.candidateNames = this.candidatesService.candidatesList.map(candidates => candidates.candidateName);
  }

  getCandidatesByName (name){
    return this.candidatesService.candidatesList.filter(candidates => candidates.candidateName === name)[0];
  }

  getCandidatesById(id: number| string) {
    return this.candidatesService.candidatesList.filter(candidates => candidates.id == id)[0];
  }


  getInterviewers() {
    return this.interviewersNames = this.interviewersService.interviewers.map(interviewers => interviewers.name);
  }

  getInterview(id: number | string): Interview {
    return Interviews.filter(interview => interview.id == id)[0];
  }

  deleteInterview(id: number) {
    let evnt = this.getInterview(id);
    let index = Interviews.indexOf(evnt);
    if (index >= 0) {
      Interviews.splice(index, 1);
    }
  }

  saveInterview(data: Interview) {
    if (Interviews.length==0){
      data.id = 1;
    }
    else {
      data.id = Math.max.apply(Math, Interviews.map(object => {
      return +object.id;
    })) + 1;
    }
    data.currentDate = new Date();
    Interviews.push(data);
    Interviews.sort((a,b)=> +new Date(a.date)- +new Date(b.date));
    console.log(Interviews);
  }
  //
  // addZero(i) {
  //   if (i < 10) {
  //     i = "0" + i;
  //   }
  //   return i;
  // }

  getCalendarEvents(): CalendarEvent[] {
    let res: CalendarEvent[] = [];
    console.log(Interviews);
    for (let i = 0; i < Interviews.length; i++) {
      let tempDate = new Date(Interviews[i].date);
      let event: CalendarEvent = {
        start: startOfHour(startOfHour(Interviews[i].date)),
        end: endOfHour(endOfHour(Interviews[i].date)),
        title: 'Interview with ' + Interviews[i].candidateName + ' ' + Interviews[i].candidateSurname,
        id: Interviews[i].id,
        draggable: true,

      };
      console.log(Interviews[i].date);
      event.start.setTime(Interviews[i].date.getTime());
      res.push(event);

    }
    console.log(res);
    return res;

  }

}
