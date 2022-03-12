import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {
  authorForm: FormGroup
  constructor(
    private fb: FormBuilder,
  ) {
    this.authorForm = this.fb.group({
      authorName: ['', [Validators.required]],
      authorEmail: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

}
