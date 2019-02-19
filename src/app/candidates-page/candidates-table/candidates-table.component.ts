import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CandidatesService} from '../../shared/candidates.service';
import {Router} from '@angular/router';
import {CandidateShortInfo} from '../../vacancies-page/shared/templates';

@Component({
  selector: 'app-candidates-table',
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.css'],
})
export class CandidatesTableComponent implements OnInit {
  @Input() isFilteredArr;
  @Input() filteredCandidatesArr;

  constructor(private candidatesService: CandidatesService, private router: Router) { }
  goToCandidate(candidateId: number) {
    this.router.navigate(['candidate', candidateId]);
  }
  ngOnInit() {
  }

  goToCandidateInfo(candidate: CandidateShortInfo) {
    this.router.navigate(['candidate-page', {
        id: candidate.id,
        candidatePhoto: candidate.photo,
        candidateName: candidate.candidateName,
        candidateSurname: candidate.candidateSurname,
        position: candidate.position,
        phone: candidate.phone,
        mail: candidate.mail,
        otherContacts: candidate.otherContacts,
        mode: 'view',
        photo: candidate.photo
      }
  ]);
  }
}
