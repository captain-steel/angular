import { Component } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  studentsList: Student[];

  constructor() {
    this.studentsList = [
      {
        name: 'Aurélie',
        age: 22,
        picture: 'https://randomuser.me/api/portraits/women/63.jpg'
      },
      {
        name: 'Gerard',
        age: 21,
        picture: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        name: 'Stéphanie',
        age: 29,
        picture: 'https://randomuser.me/api/portraits/women/11.jpg'
      }
    ];
  }
}
