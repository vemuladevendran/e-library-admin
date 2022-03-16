import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  createAdminForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.createAdminForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

}
