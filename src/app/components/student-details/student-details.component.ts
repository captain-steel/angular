import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/models/user-response.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  studentEmail: string;
  student: Result;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.userService.getUserByEmail(this.studentEmail).subscribe((response) => {
      this.student = response.results[0];
    });
  }
}
