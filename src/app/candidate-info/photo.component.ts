import {Component, Input, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @Input() candidatePhoto: string;
  @Input() mode: string;

  ngOnInit(): void {
  }

  openFile (event) {
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function(){
      let dataURL = reader.result;
     let output =(<HTMLImageElement>document.querySelector("#output"));

      if (typeof dataURL === 'string') {
        output.src = dataURL;
      }
    };
    reader.readAsDataURL(input.files[0]);
  };
}
