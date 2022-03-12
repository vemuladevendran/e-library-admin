import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  authors = ['deva', 'hari', 'charan'];
  createBookForm: FormGroup
  constructor(
    private fb: FormBuilder,
  ) {
    this.createBookForm = this.fb.group({
      image: [null],
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      authorName: ['', [Validators.required]],
      code: ['', [Validators.required]],
      preferredYear: ['', [Validators.required]],
      publishedYear: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      totalCount: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

}
