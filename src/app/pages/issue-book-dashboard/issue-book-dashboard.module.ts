import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueBookDashboardRoutingModule } from './issue-book-dashboard-routing.module';
import { IssueBookDashboardComponent } from './issue-book-dashboard.component';


@NgModule({
  declarations: [
    IssueBookDashboardComponent
  ],
  imports: [
    CommonModule,
    IssueBookDashboardRoutingModule
  ]
})
export class IssueBookDashboardModule { }
