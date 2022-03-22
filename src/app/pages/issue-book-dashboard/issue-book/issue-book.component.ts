import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book/book.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.scss']
})
export class IssueBookComponent implements OnInit {
  rollNumber = new FormControl();
  bookCode = new FormControl();
  studentData: any;
  constructor(
    private studentServe: StudentService,
    private bookServe: BookService,
    private loader: LoaderService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async getStudentDetails(): Promise<void> {
    try {
      if (this.rollNumber.value === null) {
        this.toast.info('Please Enter Roll Number');
        return;
      }
      this.studentData = await this.studentServe.getStudentByRollNumber(this.rollNumber.value)
      console.log(this.studentData);
    } catch (error: any) {
      console.log(error);
      this.toast.error(error.error?.message)
    } finally {
      this.loader.hide();
    }
  }

  async getBookDetails(): Promise<void> {
    try {
      console.log(this.bookCode.value);
    } catch (error: any) {
      console.log(error);
      this.toast.error(error?.error.message)
    } finally {
      this.loader.hide();
    }
  }

}
