import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {CalendarService} from '../calendar/calendar.service';
import {CalendarPopUpComponent} from '../calendar/calendar-pop-up/calendar-pop-up.component';
import {Interview} from '../calendar/interview-model';
import {InterviewTemplate} from '../shared/templates';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
  @Input() form;
  recordId: number;
  personId: number;
  canInput: boolean;
  currentDate: string;
  destroyed: boolean = false;
  selectedDate: Date = new Date();
  people;
  interviewers = [];
  notes: string;
  constructor(private service: TimeLineListService, private calendarService: CalendarService) {
    this.canInput = true;
  }

  ngOnInit (){
    console.log('form ' + this.form.value);
    this.people = this.calendarService.getInterviewers();
    this.personId = this.form.value.personId;
    console.log('pif ' + this.personId);
    this.recordId = this.form.value.recordId;
    this.interviewers = this.form.value.whoConducts;
    if (this.interviewers != undefined && this.interviewers.length > 0) {
      this.canInput = false;
    }
    else if(this.form.value.author != undefined && this.form.value.author.length > 0){
      this.canInput = false;
    }
    else if(this.form.value.position != undefined && this.form.value.position.length > 0){
      this.canInput = false;
    }

   this.selectedDate = this.form.value.when;
    if (this.form.controls.hasOwnProperty('note')) {

      this.selectedDate = this.form.value.when;
      this.interviewers = this.form.value.author;
    }
   this.notes = this.form.value.comments;
   console.log(this.form.value.currentDate);
    this.currentDate = this.form.value.currentDate.getDate() + '.' + (this.form.value.currentDate.getMonth() + 1) + '.' + this.form.value.currentDate.getFullYear() + " "
      + this.form.value.currentDate.getHours() + ':' + this.form.value.currentDate.getMinutes();
    if (this.interviewers != undefined && this.interviewers.length==0) {
      setTimeout(function(){
      }, 10);
    }
  }

  saveEdit() {
    this.canInput = !this.canInput;
    if (!this.canInput) {
      const date = new Date();
      this.form.currentDate = date;
      this.currentDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + " "
        + date.getHours() + ':' + date.getMinutes();
      this.service.sortByDate();

      let candidate = this.calendarService.getCandidatesById(this.personId);
      if (this.form.controls.hasOwnProperty('whoConducts')) {
        let interview = {
          id: this.recordId,
          candidateName: candidate.candidateName,
          interviewers: this.interviewers,
          otherContacts: candidate.otherContacts,
          mail: candidate.mail,
          phone: candidate.phone,
          photo: candidate.photo,
          position: candidate.position,
          date: this.selectedDate,
          candidateSurname: candidate.candidateSurname,
          notes: this.form.get("comments").value,
          currentDate: new Date()
        };

        this.calendarService.deleteInterview(this.recordId);
        this.calendarService.saveInterview(interview);
      }
      else if (this.form.controls.hasOwnProperty('note')) {
        /*this.form.setValue({
          currentDate: new FormControl(new Date()),
          when: new FormControl(this.selectedDate),
          author: new FormControl(this.interviewers),
          note: this.form.get("note").value,
          personId: new FormControl(this.personId)
        });
        this.service.addNoteForm(new FormGroup({currentDate: new FormControl(new Date()),
          when: new FormControl(this.selectedDate),
          author: new FormControl(this.interviewers),
          note: this.form.get("note").value,
          personId: new FormControl(this.personId)}));
      }*/
        this.form.patchValue({
          when: this.selectedDate
        });
        this.form.patchValue({
          author: this.interviewers
        });

      }
    }
  }

  private fontWeight = "normal";
  deleteItem() {
    this.calendarService.deleteInterview(this.recordId);
    this.destroyed = true;
    this.fontWeight = "none";
  }

  @HostBinding("style.display") get getFontWeight(){

    return this.fontWeight;
  }


}
