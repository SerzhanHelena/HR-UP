import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CandidatesService} from '../shared/candidates.service';
import {CandidateShortInfo, Positions} from '../vacancies-page/shared/templates';
import {VacanciesService} from '../shared/vacancies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-desc',
  templateUrl: 'desc.component.html',
  styleUrls: ['desc.component.css'],
})

export class DescComponent implements OnInit {
  @Input() candidateData: CandidateShortInfo;
  @Input() mode: string;

  positions = [];
  constructor(private fb: FormBuilder,
              private service: CandidatesService,
              private vacanciesService: VacanciesService,
              private router: Router) {

    for (const pos in Positions) {
      this.positions.push( pos );
    }
  }
  candidateInfoForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    if (this.mode == 'view') {
      this.candidateInfoForm = this.fb.group({
        firstName: [this.candidateData.candidateName, Validators.required],
        lastName: [this.candidateData.candidateSurname, Validators.required],
        position: [this.candidateData.position, Validators.required],
        phone: [this.candidateData.phone, Validators.required],
        mail: this.candidateData.mail,
        otherContacts: this.candidateData.otherContacts
      });
    } else {
      this.candidateInfoForm = this.fb.group({
        firstName: [[], Validators.required],
        lastName: [[], Validators.required],
        position: [[], Validators.required],
        phone: [[], Validators.required],
        mail: '',
        otherContacts: ''
      });
    }
  }

  createNewCandidate(): void {
    const thisId: number = this.service.candidatesList[this.service.candidatesList.length - 1].id + 1;
    const thisName: string = this.candidateInfoForm.value.firstName;
    const thisSurname: string = this.candidateInfoForm.value.lastName;
    const thisPosition: Positions = this.candidateInfoForm.value.position;
    const thisPhone: string = this.candidateInfoForm.value.phone;
    const thisMail: string = this.candidateInfoForm.value.mail;
    const thisOtherContacts: string = this.candidateInfoForm.value.otherContacts;
    const thisPhoto = 'https://www.meme-arsenal.com/memes/6a8161e5123d2179285efe2fbee89802.jpg';

    const candidate: CandidateShortInfo = {
      id: thisId,
      candidateName: thisName,
      candidateSurname: thisSurname,
      position: thisPosition,
      phone: thisPhone,
      mail: thisMail,
      otherContacts: thisOtherContacts,
      photo: thisPhoto
    };

    this.service.candidatesList.push(candidate);
    this.vacanciesService.pushCandidates();

    this.router.navigate(['candidate-page', {
      id: candidate.id,
      candidateName: candidate.candidateName,
      candidateSurname: candidate.candidateSurname,
      position: candidate.position,
      phone: candidate.phone,
      mail: candidate.mail,
      otherContacts: candidate.otherContacts,
      mode: 'view',
      candidatePhoto: candidate.photo
    }
    ]);

    console.log(candidate);
  }
}
