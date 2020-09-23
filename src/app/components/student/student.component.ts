import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/user-response.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  @Input()
  student: Result;
}
