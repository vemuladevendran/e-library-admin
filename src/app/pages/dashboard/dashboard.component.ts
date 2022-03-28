import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashBoardCount: any;
  progressBarWith: any[] = [];
  youtubeForm: FormGroup
  constructor(
    private dashboardServe: DashboardService,
    private loader: LoaderService,
    private toast: ToastrService,
    private fb: FormBuilder,
  ) {
    this.youtubeForm = this.fb.group({
      videoTitle: ['', [Validators.required]],
      videoLink: ['', [Validators.required]],
    })
  }


  async getDashboardCount(): Promise<void> {
    try {
      this.loader.show();
      this.dashBoardCount = await this.dashboardServe.getDashboardCount();
      this.claculateProgressBarWidth()
    } catch (error: any) {
      console.log(error);
      this.toast.error(error?.error.message);
    } finally {
      this.loader.hide();
    }
  }

  claculateProgressBarWidth(): void {
    const totalBooks = (this.dashBoardCount[0] * 100) / this.dashBoardCount[0];
    const returnedBooks = (this.dashBoardCount[1] * 100) / this.dashBoardCount[0];
    const issuedBooks = (this.dashBoardCount[2] * 100) / this.dashBoardCount[0];
    const dueBooks = (this.dashBoardCount[3] * 100) / this.dashBoardCount[0];
    this.progressBarWith.push(totalBooks, returnedBooks, issuedBooks, dueBooks);
  }

  ngOnInit(): void {
    this.getDashboardCount();
  }

}
