import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from 'src/app/models/user-response.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  @Input()
  student: Result;

  @Output()
  studentDeleted = new EventEmitter<string>();

  deleteStudent() {
    this.studentDeleted.emit(this.student.email);
  }
}
