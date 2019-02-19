import 'bootstrap/dist/css/bootstrap.css';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './candidate-info/photo.component';
import { DescComponent } from './candidate-info/desc.component';
import { AppAddExperienceInfoButtonComponent } from './app-add-experience-info-button/app-add-experience-info-button.component';
import {TimeLineListService} from './shared/time-line-list.service';
import { TimeLineListComponent } from './time-line-list/time-line-list.component';
import { AssignInterviewButtonComponent } from './assign-interview-button/assign-interview-button.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteButtonComponent } from './add-note-button/add-note-button.component';
import { AddFormComponent } from './add-form/add-form.component';
import { AddInfoButtonComponent } from './add-info-button/add-info-button.component';
import { VacanciesListComponent } from './vacancies-page/vacancies-list/vacancies-list.component';
import { VacanciesItemComponent } from './vacancies-page/vacancies-item/vacancies-item.component';
import { CandidateShortInfoComponent } from './vacancies-page/candidate-short-info/candidate-short-info.component';
import { VacancyEditComponent } from './vacancy-page/vacancy-edit/vacancy-edit.component';
import { CandidateComponent } from './candidate-page/candidate/candidate.component';
import {RouterModule} from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { CalendarPopUpComponent } from './calendar/calendar-pop-up/calendar-pop-up.component';
import {AngularDateTimePickerModule} from 'angular2-datetimepicker';
import {Select2Module} from 'ng2-select2';
import {CommonModule, DatePipe} from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {CalendarService} from './calendar/calendar.service';
import {CalendarModule as DateTimeCalendarModule} from 'primeng/calendar';
import { TagInputModule } from 'ngx-chips';
import {VacanciesService} from './shared/vacancies.service';
import {CandidatesService} from './shared/candidates.service';
import { CandidatesTableComponent } from './candidates-page/candidates-table/candidates-table.component';
import { CandidateFilterComponent } from './candidates-page/candidates-filter/candidate-filter.component';
import { ViewInterviewComponent } from './calendar/view-interview/view-interview.component';
import { CandidatesPageComponent } from './candidates-page/candidates-page/candidates-page.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {CodeHighlighterModule, GrowlModule, MessagesModule, TabViewModule} from 'primeng/primeng';
import {MatCardModule} from '@angular/material/card';
const routes = [
  {path: '', component: CandidateComponent},
  {path: 'candidate/:term', component: CandidateComponent, skipLocationChange:true},
  {path: 'candidates', component: CandidatesPageComponent},
  {path: 'vacancies', component: VacanciesListComponent},
  {path: 'interview', component: CalendarComponent},
  {path: 'create-vacancy', component: VacancyEditComponent},
  {path: 'candidate-page', component: CandidateComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    DescComponent,
    AppAddExperienceInfoButtonComponent,
    TimeLineListComponent,
    AssignInterviewButtonComponent,
    NotesComponent,
    AddNoteButtonComponent,
    AddFormComponent,
    AddInfoButtonComponent,
    VacanciesListComponent,
    VacanciesItemComponent,
    CandidateShortInfoComponent,
    VacancyEditComponent,
    CandidateComponent,
    CalendarComponent,
    CalendarPopUpComponent,
    CandidatesTableComponent,
    CandidateFilterComponent,
    ViewInterviewComponent,
    CandidatesPageComponent
  ],
  imports: [
    BrowserModule,
    GrowlModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DateTimeCalendarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatToolbarModule,
    MatRippleModule,
    MatInputModule,
    FileUploadModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    AngularDateTimePickerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    Select2Module,
    MatCardModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    ConfirmDialogModule,
    MessagesModule,
    TabViewModule,
    CodeHighlighterModule,
    TagInputModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
  useFactory: adapterFactory}
    )
  ],
  providers: [
    TimeLineListService,
    VacanciesService,
    CandidatesService,
    CalendarService,
    MatDatepickerModule,
    DatePipe,
    ConfirmationService,
    {
      provide: MatDialogRef,
      useValue: {}
    }, {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CalendarComponent,
    CalendarPopUpComponent,
  ViewInterviewComponent]
})
export class AppModule { }
