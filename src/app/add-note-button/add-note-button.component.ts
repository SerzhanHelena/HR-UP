import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TimeLineListService} from '../shared/time-line-list.service';
import {NoteTemplate} from '../shared/templates';

@Component({
  selector: 'app-add-note-button',
  templateUrl: './add-note-button.component.html',
  styleUrls: ['./add-note-button.component.css']
})
export class AddNoteButtonComponent {
  @Input() personId:number;
  constructor(private service: TimeLineListService) { }
  @Output() infoEvent = new EventEmitter();
  function2(){
    this.infoEvent.emit(null);
    console.log('click_notet');
  }
  onSubmit() {
    this.service.addNoteForm(new NoteTemplate(this.personId).form);
    this.service.clearEmptyForms();
    this.function2();
  }
}
