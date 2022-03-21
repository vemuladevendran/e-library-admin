import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueBookRoutingModule } from './issue-book-routing.module';
import { IssueBookComponent } from './issue-book.component';


@NgModule({
  declarations: [
    IssueBookComponent
  ],
  imports: [
    CommonModule,
    IssueBookRoutingModule
  ]
})
export class IssueBookModule { }
