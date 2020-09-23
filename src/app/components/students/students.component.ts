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
    this.userService.getUsers().subscribe((userResponse) => {
      this.usersList = userResponse.results;
    });
  }
}
