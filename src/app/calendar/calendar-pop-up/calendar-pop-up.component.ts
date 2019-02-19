import {Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output, ViewChild, ɵrestoreView} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../calendar/calendar.component';
import {Interview} from '../interview-model';
import{CandidatesService} from '../../shared/candidates.service';
import {CalendarService} from '../calendar.service';
import {endOfDay, startOfDay} from 'date-fns';
import {Subject} from 'rxjs';
import {CalendarEvent} from 'angular-calendar';
import {Settings} from 'angular2-datetimepicker/interface';
import {DatePipe, formatDate} from '@angular/common';
import {InterviewersService} from '../../shared/interviewers.service';

@Component({
  selector: 'app-calendar-pop-up',
  templateUrl: './calendar-pop-up.component.html',
  styleUrls: ['./calendar-pop-up.component.css']
})

export class CalendarPopUpComponent implements OnInit {

  receivedCandidate;
  receivedInterviewer;
  findName = '';
  interviewers:string[]=[];
  selectedSurname;
  selectedPosition;
  selectedNotes;
  interview: Interview ;
  dateToSet: Date;
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  questioners;
  applicants;
  selectedPhone;
  selectedMail;
  selectedOtherContacts;
  date: Date = new Date();
  selectedPhoto;

  getCandidates(): void {
    this.applicants = this.calendarService.getCandidates();
    console.log(this.applicants);

  }

  getInterviewers() {
    this.questioners = this.calendarService.getInterviewers();
  }

  constructor(
    public dialogRef: MatDialogRef<CalendarPopUpComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData, private calendarService: CalendarService, private candidatesService: CandidatesService, private interviewersService: InterviewersService
    ) {

    this.interview = this.data.interview;
    if (this.interview != null) {
      this.interviewers = this.interview.interviewers;
      this.findName = this.interview.candidateName;
    }

    this.dateToSet = this.data.date;
    console.log(this.data);
  }

  ngOnInit() {
    this.getCandidates();
    this.getInterviewers();
    console.log(this.interview);

    if (this.interview !== undefined && this.interview !== null) {
      let selectedName = this.applicants.filter(x => x.toString() === this.interview.candidateName)[0];
      const index = this.applicants.indexOf(selectedName, 0);
      if (index > -1) {
        this.applicants.splice(index, 1);
      }
      this.applicants.unshift(selectedName);

      this.selectedSurname = this.interview.candidateSurname;
      this.selectedPosition = this.interview.position;
      this.selectedNotes = this.interview.notes;
      this.selectedPhone = this.interview.phone;
      this.selectedMail = this.interview.mail;
      this.selectedOtherContacts = this.interview.otherContacts;
      this.date = this.interview.date;
      this.interviewers = this.interview.interviewers;
this.selectedPhoto = this.interview.photo;
      console.log(this.interviewers);

    }
    else {
    this.date = this.dateToSet;
      if (this.findName == '' && this.interviewers.length==0) {
        setTimeout(function(){
          $('#applicantSelect, #interviewerSelect').find('.ng-star-inserted').click();
        }, 10);
      }
     //this.date = new Date(formatDate(this.dateToSet, 'M/d/yy', this.locale));
    }
  }



  onNoClick(): void {
    this.dialogRef.close();
  }


  changed(event) {
    this.findName = event.value;
    this.receivedCandidate = this.candidatesService.candidatesList.find(obj => obj.candidateName == this.findName);
    console.log(this.receivedCandidate);
    this.selectedSurname = this.receivedCandidate.candidateSurname;
    this.selectedPosition = this.receivedCandidate.position;
    this.selectedNotes = this.receivedCandidate.notes;
  }

  addInterview() {
    if (this.interview != undefined && this.interview != null) {
      let event = {
        id: this.interview.id,
        candidateSurname: this.selectedSurname,
        candidateName: this.findName,
        interviewers: this.interviewers,
        date: this.date,
        notes: this.selectedNotes,
        position: this.selectedPosition,
        phone: this.selectedPhone,
        mail: this.selectedMail,
        otherContacts: this.selectedOtherContacts,
        photo: this.selectedPhoto
      };

       this.calendarService.deleteInterview(event.id);
       this.calendarService.saveInterview(event);

    }
    else {
     this.calendarService.saveInterview({
        candidateSurname: this.selectedSurname,
        candidateName: this.findName,
        interviewers: this.interviewers,
        date: this.date,
        notes: this.selectedNotes,
        position: this.selectedPosition,
        phone: this.selectedPhone,
        mail: this.selectedMail,
       otherContacts: this.selectedOtherContacts,
       photo: this.selectedPhoto
      });
    }
    console.log(this.events);
  }
}


