import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TimeLineListService} from '../../shared/time-line-list.service';
import {CandidateShortInfo} from '../../vacancies-page/shared/templates';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  personId: number;
  mode: string;
  constructor(private route: ActivatedRoute, private service: TimeLineListService){
    this.route.params.subscribe(p=>  this.personId = p['term']);
    this.service.clearEmptyForms();
  }

  hidden = true;
  isShow () {
    this.hidden = false;
  }
  sub: any;
  photo: string;
  data: CandidateShortInfo = {
    id: -1,
    candidateName: '',
    candidateSurname: '',
    position: '',
    phone: '',
    mail: '',
    otherContacts: '',
    photo: ''
  };

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.photo = params['candidatePhoto'];
        this.personId = params['id'];
        this.data.id = params['id'];
        this.data.candidateName = params['candidateName'] || '';
        this.data.candidateSurname = params['candidateSurname'] || '';
        this.data.position = params['position'] || '';
        this.data.phone = params['phone'] || '';
        this.data.mail = params['mail'] || '';
        this.data.otherContacts = params['otherContacts'] || '';
        this.mode = params['mode'] || '';
      });
  }
}
