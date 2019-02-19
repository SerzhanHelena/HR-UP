import {CandidateShortInfo} from '../vacancies-page/shared/templates';
import {Positions} from '../vacancies-page/shared/templates';

export class CandidatesService {
  candidatesList: CandidateShortInfo[] = [
    {
      id: 1,
      candidateName: 'Mark',
      candidateSurname: 'Steve',
      position: Positions.Angular,
      phone: '+375-25-123-4567',
      mail: 'abcdef@gmail.com',
      otherContacts: '+375-25-000-0000',
      photo: 'http://buzza.ru/uploads/memes/b41cc8e194a00465fdff78903ed4824e/thumb/PBNhEg.jpg'
    },
    {
      id: 2,
      candidateName: 'Harry',
      candidateSurname: 'Potter',
      position: Positions.React,
      phone: '+375-25-120-4562',
      mail: 'hgik@gmail.com',
      otherContacts: '+375-25-000-0000',
      photo: 'https://zlyka.com/wp-content/uploads/2016/05/123-1-150x150.jpg'
    },
    {
      id: 3,
      candidateName: 'George',
      candidateSurname: 'Klein',
      position: Positions.TS,
      phone: '+375-25-123-4463',
      mail: 'lmnop@gmail.com',
      otherContacts: '+375-25-000-0000',
      photo: 'https://rugeroi.ru/wp-content/uploads/2016/12/princ-garri-56-min-150x150.jpg'
    },
    {
      id: 4,
      candidateName: 'Marry',
      candidateSurname: 'Parker',
      position: Positions.PHP,
      phone: '+375-25-123-4547',
      mail: 'qrst@gmail.com',
      otherContacts: '+375-25-000-0000',
      photo: 'https://zlyka.com/wp-content/uploads/2016/05/3jpg-150x150.jpg'
    },
    {
      id: 5,
      candidateName: 'Bob',
      candidateSurname: 'Twist',
      position: Positions.Vue,
      phone: '+375-25-125-1524',
      mail: 'Twist@gmail.com',
      otherContacts: 'no',
      photo: 'https://i.pinimg.com/236x/ea/11/41/ea11419bfea3d8f43f3edbd9b7b9b343--celebrities-pictures.jpg'
    },
    {
      id: 6,
      candidateName: 'Billy',
      candidateSurname: 'Parker',
      position: Positions.CSS,
      phone: '+375-33-321-5560',
      mail: 'Parkerb@gmail.com',
      otherContacts: 'Parker Billy - Skype',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99Ms-AoIv9OeR4lK-yT2j-HCZV3TopRWSDnb_tsmNtyW7V6bsyA'
    },
    {
      id: 7,
      candidateName: 'Steve',
      candidateSurname: 'Jobs',
      position: Positions.Vue,
      phone: '+375-29-321-0077',
      mail: 'Jobslol@gmail.com',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTguWZa7EzRVW1TJae5ZqhNVQyZqsTcQ-mx-rbrCf_jkAEmMpgU',
      otherContacts: 'no'
    },
    {
      id: 8,
      candidateName: 'Anna',
      candidateSurname: 'Pott',
      position: Positions.Angular,
      phone: '+375-25-721-5990',
      mail: 'AnnaPott@gmail.com',
      otherContacts: 'Anna Pott - fb',
      photo: 'https://zlyka.com/wp-content/uploads/2016/05/Michelle_Rodriguez-150x150.jpg'
    },
    {
      id: 9,
      candidateName: 'Larry',
      candidateSurname: 'King',
      position: Positions.React,
      phone: '+375-25-125-0124',
      mail: 'orughoug@gmail.com',
      otherContacts: 'no',
      photo: 'https://cs5.pikabu.ru/images/previews_gif_comm/2015-01_2/14208100648205.gif'
    },
    {
      id: 10,
      candidateName: 'Paul',
      candidateSurname: 'Poster',
      position: Positions.Angular,
      phone: '+375-25-321-4587',
      mail: 'abcdefrg@gmail.com',
      otherContacts: '',
      photo: 'http://buzza.ru/uploads/memes/Oct2015/thumb/8h0c8.jpg'
    },
  ];
}
