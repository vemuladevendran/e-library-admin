import { StudentService } from '../../services/student/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  constructor(private student: StudentService) {}

  ngOnInit(): void {
    this.student
      .getStudent()
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  }
}
