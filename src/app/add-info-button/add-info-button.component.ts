import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'add-info',
  templateUrl: './add-info-button.component.html',
  styleUrls: ['./add-info-button.component.css']
})
export class AddInfoButtonComponent {
  shown = 0;
  inputText = '';
  @Output() saveInputText = new EventEmitter();
  constructor() {}

  showInput() {
    this.shown = 1;
  }

  hideInput(){
    this.shown = 0;
    this.saveInputText.emit(this.inputText);
  }
}
