import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, FormControl} from '@angular/forms';
import {VacanciesService} from '../../shared/vacancies.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Positions, VacancyListItem} from '../../vacancies-page/shared/templates';
import {VacancyDialogData} from '../../vacancies-page/vacancies-list/vacancies-list.component';

@Component({
  selector: 'app-vacancy-edit',
  templateUrl: './vacancy-edit.component.html',
  styleUrls: ['./vacancy-edit.component.css']
})
export class VacancyEditComponent implements OnInit {
  vacancyEdit: FormGroup;
  requirements: FormArray;
  newVacancy: VacancyListItem;
  isInactive = false;
  positions = [];

  constructor(private fb: FormBuilder,
              private service: VacanciesService,
              public dialogRef: MatDialogRef<VacancyEditComponent>,
              @Inject(MAT_DIALOG_DATA)
              private data: VacancyDialogData) { }

  ngOnInit() {
    for (const pos in Positions) {
      this.positions.push( pos );
    }
    if (this.data.dialogMode == 'readEdit') {
      this.isInactive = true;
      this.vacancyEdit = this.fb.group({
        vacancyName: this.data.vacancy.vacancyName,
        vacancyStatus: this.data.vacancy.vacancyStatus,
        vacancyDescription: this.data.vacancy.vacancyDescription,
        requirements: this.fb.array(this.pushRequirements())
      });
    } else if (this.data.dialogMode == 'create') {
      this.vacancyEdit = this.fb.group({
        vacancyName: '',
        vacancyStatus: '',
        vacancyDescription: '',
        requirements: new FormArray([
            new FormGroup({
              reqName: new FormControl(''),
              isRequire: new FormControl(false),
              isPublic: new FormControl(false)
            })
          ]
        )
      });
    }
  }

  pushRequirements() {
    const requirementsArray = [];
    for (const item of this.data.vacancy.requirements.controls) {
      requirementsArray.push(item);
    }
    return requirementsArray;
  }

  createRequirement() {
    return this.fb.group({
      reqName: '',
      isRequire: false,
      isPublic: false,
    });
  }

  addRequirement(): void {
    this.requirements = this.vacancyEdit.get('requirements') as FormArray;
    this.requirements.push(this.createRequirement());
  }

  onSave() {
    this.newVacancy = {
      vacancyName: this.vacancyEdit.get('vacancyName').value,
      vacancyStatus: this.vacancyEdit.get('vacancyStatus').value,
      vacancyDescription: this.vacancyEdit.get('vacancyDescription').value,
      requirements: this.vacancyEdit.get('requirements'),
      candidates: this.data.vacancy.candidates
    };
    if (this.data.dialogTitle = 'Edit vacancy') {
      if (this.data.indexOfVacancy != -1) {
        this.service.changeVacancy(this.data.indexOfVacancy, this.newVacancy);
      } else {
        this.service.addVacancy(this.newVacancy);
      }
    }
    this.dialogRef.close(this.newVacancy);
  }
}
