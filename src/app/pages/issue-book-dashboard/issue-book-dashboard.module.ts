import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueBookDashboardRoutingModule } from './issue-book-dashboard-routing.module';
import { IssueBookDashboardComponent } from './issue-book-dashboard.component';
import { IssueBookComponent } from './issue-book/issue-book.component';


@NgModule({
  declarations: [
    IssueBookDashboardComponent,
    IssueBookComponent
  ],
  imports: [
    CommonModule,
    IssueBookDashboardRoutingModule
  ]
})
export class IssueBookDashboardModule { }
