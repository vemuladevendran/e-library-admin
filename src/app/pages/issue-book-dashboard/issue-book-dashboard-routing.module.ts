import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueBookDashboardComponent } from './issue-book-dashboard.component';

const routes: Routes = [{ path: '', component: IssueBookDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueBookDashboardRoutingModule { }
