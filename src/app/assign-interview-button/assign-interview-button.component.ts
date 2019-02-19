import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {InterviewTemplate} from '../shared/templates';
import {Router} from '@angular/router';
import {TimeLineListComponent} from '../time-line-list/time-line-list.component';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-assign-interview-button',
  templateUrl: './assign-interview-button.component.html',
  styleUrls: ['./assign-interview-button.component.css']
})
export class AssignInterviewButtonComponent {
  constructor(private service: TimeLineListService, private router:Router) {}
  @Input() personId:number;
  forms: InterviewTemplate[];
  refresh: Subject<any> = new Subject();

  onSubmit() {
    this.service.addInterviewForm(new InterviewTemplate(this.personId, 0), this.personId);
    console.log('open pid ' + this.personId);
    this.function2();
    //this.router.navigate(['candidate', this.personId]);
  }
  @Output() myEvent = new EventEmitter();
  function2(){
    this.myEvent.emit(null);
    console.log('click');
  }

}

