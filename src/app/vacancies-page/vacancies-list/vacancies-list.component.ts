import { Component } from '@angular/core';
import {VacanciesService} from '../../shared/vacancies.service';
import {Statuses, VacancyListItem} from '../shared/templates';
import {MatDialog} from '@angular/material';
import {VacancyEditComponent} from '../../vacancy-page/vacancy-edit/vacancy-edit.component';
import {Subject} from 'rxjs';

export interface VacancyDialogData {
  dialogTitle: string;
  dialogMode: string;
  vacancy: VacancyListItem;
  indexOfVacancy: number;
}

export interface StatusToShowInt {
  statusName: string;
  statusIsShown: boolean;
}

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent {
  vacancies: VacancyListItem[] = [];
  shownStatuses: StatusToShowInt[] = [];
  refresh: Subject<any> = new Subject();

  constructor(private service: VacanciesService,
              public dialog: MatDialog){
    for (let serviceElement of this.service.vacanciesList) {
      this.vacancies.push(serviceElement);
    }
    for (const status in Statuses) {
      this.shownStatuses.push( {statusName: status, statusIsShown: false } );
    }
  }

  openDialog(title: string, mode: string, index: number) {
    let vacancy = {};
    if (index != -1) {
      vacancy = this.vacancies[index];
    }

    const dialogRef = this.dialog.open(VacancyEditComponent, {
      width: '750px',
      data: {dialogTitle: title, dialogMode: mode, vacancy: vacancy, indexOfVacancy: index}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vacancies = this.service.vacanciesList;
        this.refresh.next();
      }
    });
  }

  toggle(vacancyStatus: string) {
    for (let i = 0; i < this.shownStatuses.length; i++) {
      if (this.shownStatuses[i].statusName == vacancyStatus) {
        this.shownStatuses[i].statusIsShown = !this.shownStatuses[i].statusIsShown;
        break;
      }
    }
  }

  statusToShow() {
    let shownVacancies: VacancyListItem[] = [];
    for (const vacancy of this.service.vacanciesList) {
      for (const status of this.shownStatuses) {
        if (vacancy.vacancyStatus == status.statusName && status.statusIsShown) {
          shownVacancies.push(vacancy);
        }
      }
    }
    this.vacancies = shownVacancies;
  }

  reset() {
    this.vacancies = this.service.vacanciesList;
  }
}
