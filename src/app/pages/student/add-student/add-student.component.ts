import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  @ViewChild('profileUpload') fileInput: ElementRef<HTMLInputElement> | undefined;
  createStudentForm: FormGroup;
  defaultImageUrl = "/assets/default-profile.png"
  selectedImagePreviewURL: any = "";
  selectedFile: any;
  formData = new FormData();

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
  ) {
    this.createStudentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rollNumber: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      year: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      membership: [true, [Validators.required]]
    });
  }

  ngOnInit(): void { }

  // image change handle
  handleFileSelection(): void {
    const [file] = this.fileInput?.nativeElement?.files as any as File[];
    if (file) {
      this.selectedFile = file;
      this.selectedImagePreviewURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    }
  }
  // image select
  openFileSelectionDialog(): void {
    this.fileInput?.nativeElement?.click();
  }

  // remove selected image
  removeSelectedImage(): void {
    this.selectedImagePreviewURL = '';
  }
}
