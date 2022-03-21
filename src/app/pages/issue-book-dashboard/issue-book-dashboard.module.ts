import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueBookDashboardRoutingModule } from './issue-book-dashboard-routing.module';
import { IssueBookDashboardComponent } from './issue-book-dashboard.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
]

@NgModule({
  declarations: [
    IssueBookDashboardComponent,
    IssueBookComponent
  ],
  imports: [
    CommonModule,
    IssueBookDashboardRoutingModule,
    ReactiveFormsModule,
    ...materialModules,
  ]
})
export class IssueBookDashboardModule { }
