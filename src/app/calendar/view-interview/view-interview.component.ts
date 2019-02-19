import {Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output, ViewChild, ɵrestoreView} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../calendar/calendar.component';
import {Interview} from '../interview-model';
import {Select2OptionData} from 'ng2-select2';
import{CandidatesService} from '../../shared/candidates.service';
import {CalendarService} from '../calendar.service';
import {CalendarEvent} from 'angular-calendar';
import {InterviewersService} from '../../shared/interviewers.service';
import {CandidateShortInfo} from '../../vacancies-page/shared/templates';
import {Interviews} from '../interviews.mock';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-interview',
  templateUrl: './view-interview.component.html',
  styleUrls: ['./view-interview.component.css']
})
export class ViewInterviewComponent implements OnInit {
  selectedDate = new Date();
  interviewers = [];
  name;
  surname;
  mail;
  photo;
  phone;
  notes;
  position;
  other;
  interview: Interview;
  candidate: CandidateShortInfo;
  constructor(private calendarService: CalendarService, private router: Router,
              public dialogRef: MatDialogRef<ViewInterviewComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: DialogData){
  this.interview = this.data.interview;

  }

  ngOnInit() {
    let interview: Interview = new Interview();
      let candidate = this.calendarService.getCandidatesByName(this.interview.candidateName);

      this.candidate = candidate;
       this.name = candidate.candidateName;
       this.surname = candidate.candidateSurname;
       this.mail = candidate.mail;
       this.photo = candidate.photo;
       this.phone = candidate.phone;

       this.other = candidate.otherContacts;
       this.position = candidate.position;
       this.notes = this.interview.notes;
      console.log(this.candidate);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  goToCandidateInfo(candidate: CandidateShortInfo) {

    this.router.navigate(['candidate-page', {
      id: candidate.id,
      candidateName: candidate.candidateName,
      candidateSurname: candidate.candidateSurname,
      position: candidate.position,
      phone: candidate.phone,
      mail: candidate.mail,
      otherContacts: candidate.otherContacts,
      mode: 'view',
      candidatePhoto: candidate.photo
    }
    ]);
    this.dialogRef.close();
  }

}
