import {Component, Input, OnInit} from '@angular/core';
import {VacanciesService} from '../../shared/vacancies.service';
import {VacancyListItem} from '../shared/templates';


@Component({
  selector: 'app-vacancies-item',
  templateUrl: './vacancies-item.component.html',
  styleUrls: ['./vacancies-item.component.css']
})
export class VacanciesItemComponent implements OnInit {
  @Input() vacancy: VacancyListItem;

  constructor(private service: VacanciesService) {}

  ngOnInit() {}
}
