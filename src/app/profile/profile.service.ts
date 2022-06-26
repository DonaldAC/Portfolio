import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ProfileService {
    baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  contactus(data: any): Observable<any> {
    return this.http.post('http://localhost:4200/contact',data);
  }

  projects:any = [
    {
      id: 1,
      title: 'Vimpto',
      desc: 'Vimpto is a metaverse project. It is a platform that aims to build a community of people interested in crypto space.',
      livedemo: 'https://www.vimpto.com',
      githurl: '#',
      imgUrl: 'assets/images/vimp-logo.svg',
      tech: 'Angular 13 , NodeJs,  Google Cloud, Firebase, Nest, Express, Web3'
    },

    {
      id: 2,
      title: 'Rowan',
      desc: 'Rowan is a big data, AI and machine learning solution that helps law firms remain ahead of competitors, best-engage clients and increase profitability',
      livedemo: 'https://www.rowan.ai',
      githurl: '#',
      imgUrl: 'assets/images/rowan-logo-color-1.svg',
      tech: 'NodeJs, Google Cloud / Firebase, Express, Nest'
    },


    {
      id: 3,
      title: 'Funda',
      desc: ' Funda is a funding application powered by AI which allows people to apply for funding and receive an offer in less than 24 hours for their projects',
      livedemo: 'https://www.funda.ai',
      githurl: '#',
      imgUrl: 'assets/images/funda-logo.svg',
      tech: 'Angular 13, NodeJS, Firebase, Express, NestJs'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: '#',
      githurl: 'https://github.com/donaldac/Chat-app-using-Nodejs',
      imgUrl: 'assets/images/multichatRoom.jpeg',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Web Spider with NodeJs',
      desc: '',
      livedemo: '#',
      githurl: 'https://github.com/donaldac/spiderWeb',
      imgUrl: 'assets/images/webSpider.png',
      tech: 'NodeJs, HTML, CSS'
    },



    {
      id: 6,
      title: 'InfinityCn',
      desc: 'App for buying and selling cryptocurrency',
      livedemo: 'https://donaldac.github.io/InfinityCn/',
      githurl: 'https://github.com/donaldac/InfinityCn',
      imgUrl: 'assets/images/Rectangle.svg',
      tech: 'HTML, CSS, XML to JSON'
    },



    {
      id: 7,
      title: 'Academo Attendance Sheet Page',
      desc: '',
      livedemo: 'https://www.academo.io',
      githurl: '#',
      imgUrl: 'assets/images/academo-logo-alt.png',
      tech: 'Angular13, HTML, Bootstrap, CSS, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: '#',
      githurl: 'https://github.com/donaldac/COVOID-19',
      imgUrl: 'assets/images/covidTracker.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Get Document online',
      desc: 'An app with the purpose of helping peoples to apply for documents documents online, driving licences...',
      livedemo: 'https://www.getdocumentonline.com/',
      githurl: '#',
      imgUrl: 'assets/images/getdocument.png',
      tech: 'WordPress, HTML, CSS, JavaScript'
    },


    {
      id: 10,
      title: 'Inertel',
      desc: 'Web interface of the inertel company specialize in renewable energies and tech services',
      livedemo: 'https:www.inertel.cm',
      githurl: '#',
      imgUrl: 'assets/images/inertel.png',
      tech: 'WordPress, JavaScript, HtML, CSS'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/donaldac/Personal-Portfolio',
      imgUrl: 'assets/images/donald_PC.jpg',
      tech: 'Angular, Bootstrap'
    },
  ]
  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    }
  ];

  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
}