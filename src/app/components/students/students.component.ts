import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/user-response.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  usersList: Result[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers(7).subscribe((userResponse) => {
      this.usersList = userResponse.results;
    });
  }

  generateStudents(studentsNumber: string) {
    this.userService.getUsers(+studentsNumber).subscribe((userResponse) => {
      this.usersList = userResponse.results;
    });
  }

  deleteStudent(studentEmail: string) {
    // TODO remove the student from the 'usersList'
  }

  canBeShown(user: Result) {
    // if (user.nat === 'FR') {
    //   return true;
    // }
    // return false;

    return true;

    // equivalent
    // return user.nat === 'FR';
  }
}
