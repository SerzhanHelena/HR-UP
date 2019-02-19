import {Component, Input, OnInit} from '@angular/core';
import {CandidateShortInfo} from '../shared/templates';

@Component({
  selector: 'app-candidate-short-info',
  templateUrl: './candidate-short-info.component.html',
  styleUrls: ['./candidate-short-info.component.css']
})
export class CandidateShortInfoComponent implements OnInit {
  @Input() candidate: CandidateShortInfo;

  constructor() {}

  ngOnInit() {}

}
