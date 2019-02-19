import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CandidateShortInfo, Positions} from '../../vacancies-page/shared/templates';
import {CandidatesService} from '../../shared/candidates.service';

@Component({
  selector: 'app-candidate-filter',
  templateUrl: './candidate-filter.component.html',
  styleUrls: ['./candidate-filter.component.css']
})
export class CandidateFilterComponent implements OnInit {
  @Output() onFilterCandidates = new EventEmitter<CandidateShortInfo[]>();
  @Output() onResetCandidates = new EventEmitter();
  isChecked: boolean;

  candidatesList = [];
  constructor(serv: CandidatesService) {
    for (const pos in Positions) {
      this.positions.push( pos );
    }

    this.candidatesList = serv.candidatesList;
  }
  positions = [];
  filteredPositions = [];
  filteredCandidates = [];

  ngOnInit() {
  }

  filterCandidates() {
    for (let i = 0; i <= this.filteredPositions.length - 1; i++) {
      for (let j = 0; j <= this.candidatesList.length - 1; j++) {
        if (this.candidatesList[j].position === this.filteredPositions[i]) {
          this.filteredCandidates.push(this.candidatesList[j]);
        }
      }
    }
    this.onFilterCandidates.emit(this.filteredCandidates);
  }

  resetCandidates() {
    this.filteredCandidates.length = 0;
    this.isChecked = false;
    this.onResetCandidates.emit(this.filteredCandidates);
    console.log(this.filteredCandidates);
  }
}
