import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewersService {
  interviewers = [
    {
      id: 1,
      name: 'Liza',
    },
    {
      id: 2,
      name: 'Alex'
    },
    {
      id: 3,
      name: 'Mike'
    }
  ];
  constructor() { }
}
