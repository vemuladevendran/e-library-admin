import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

const materialImports = [
  MatInputModule,
  MatFormFieldModule
]
@NgModule({
  declarations: [
    AuthorComponent,
    AddAuthorComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    ReactiveFormsModule,
    ...materialImports
  ]
})
export class AuthorModule { }
