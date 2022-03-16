import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  createStudentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createStudentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rollNo: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      year: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
}
