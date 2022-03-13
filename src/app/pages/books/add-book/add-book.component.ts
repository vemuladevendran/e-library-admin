import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  @ViewChild('bookImage') fileInput: ElementRef<HTMLInputElement> | undefined;
  selectedImagePreviewURL: any = "";
  selectedFile: any;
  authors = ['deva', 'hari', 'charan'];
  createBookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
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

  // image change handle
  handleFileSelection(): void {
    const [file] = this.fileInput?.nativeElement?.files as any as File[];
    if (file) {
      this.selectedFile = file;
      this.selectedImagePreviewURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    }
  }
  
  // open file input
  openFileSelectionDialog(): void {
    this.fileInput?.nativeElement?.click();
  }

  // on submiting the form
  async createBook(): Promise<void> {
    try {
      console.log(this.createBookForm.value);
    } catch (error) {
      console.log(error);
    }
  }
}
