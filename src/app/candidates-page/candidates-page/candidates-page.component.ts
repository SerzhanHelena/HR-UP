import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-candidates-page',
  templateUrl: './candidates-page.component.html',
  styleUrls: ['./candidates-page.component.css']
})
export class CandidatesPageComponent implements OnInit {
  isFiltered = false;
  filteredCandidates = [];
  constructor() { }

  ngOnInit() {
  }

  updateCandidatesTable(filteredCandidates) {
    this.filteredCandidates = filteredCandidates;
    this.isFiltered = true;
    console.log(this.filteredCandidates);
  }

  resetCandidatesTable(filteredCandidates) {
    this.isFiltered = false;
    this.filteredCandidates = filteredCandidates;
    console.log(this.filteredCandidates);
  }

}
