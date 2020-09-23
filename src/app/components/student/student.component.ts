import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from 'src/app/models/user-response.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  @Input()
  // input is used to get a variable from the parent (app-students)
  student: Result;

  @Output()
  // output is used to raise an event to the parent (app-students)
  studentDeleted = new EventEmitter<string>();

  // this method is executed when the user clicks on the delete button
  deleteStudent() {
    // emit => raises an event to the parent element
    // and gives him the email of the current student
    this.studentDeleted.emit(this.student.email);
  }
}
