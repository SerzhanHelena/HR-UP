import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { DatePipe } from '@angular/common';

export class CustomDateFormatter extends CalendarDateFormatter {



  public weekViewHour({date, locale}: DateFormatterParams): string {
    return new Intl.DateTimeFormat('ru', {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  }
}
