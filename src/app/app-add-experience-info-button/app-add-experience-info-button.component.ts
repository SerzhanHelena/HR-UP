import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {ExperienceTemplate} from '../shared/templates';

@Component({
  selector: 'app-app-add-experience-info-button',
  templateUrl: './app-add-experience-info-button.component.html',
  styleUrls: ['./app-add-experience-info-button.component.css']
})
export class AppAddExperienceInfoButtonComponent {
  @Input() personId:number;
  constructor(private service: TimeLineListService) {}
  @Output() infoEvent = new EventEmitter();
  function2(){
    this.infoEvent.emit(null);
    console.log('click_ experience');
  }
  onSubmit() {
    this.service.addExperienceForm(new ExperienceTemplate(this.personId).form);
    this.service.clearEmptyForms();
    this.function2();
  }
}
