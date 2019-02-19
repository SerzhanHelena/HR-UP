import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {InterviewTemplate} from '../shared/templates';
import {Router} from '@angular/router';

@Component({
  selector: 'app-time-line-list',
  templateUrl: './time-line-list.component.html',
  styleUrls: ['./time-line-list.component.css']
})
export class TimeLineListComponent implements OnInit{
  forms;
  @Input() personId:number;
  @Output() refresh = new EventEmitter();

  constructor(private service: TimeLineListService, private route:Router){}

  ngOnInit() {
    this.forms = this.service.getFormsArray(this.personId);
  }


  refreshing() {
    this.refresh.emit(
    this.forms = this.service.getFormsArray(this.personId)
    );
  }


}
