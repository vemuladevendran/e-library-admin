import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-promote-students',
  templateUrl: './promote-students.component.html',
  styleUrls: ['./promote-students.component.scss']
})
export class PromoteStudentsComponent implements OnInit {
  selectedYear = new FormControl();
  constructor(
    private loader: LoaderService,
    private toast: ToastrService,
  ) { }


  async promoteStudents(): Promise<void> {
    try {
      console.log(this.selectedYear.value);
      if (!this.selectedYear.value) {
        this.toast.info("Please select the year");
        return;
      }
    } catch (error: any) {
      console.log(error);
      this.toast.error(error?.error.meaasge)
    } finally {
      this.loader.hide();
    }
  }

  ngOnInit(): void {
  }

}
