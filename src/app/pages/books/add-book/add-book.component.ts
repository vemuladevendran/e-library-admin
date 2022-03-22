import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthorService } from 'src/app/services/author/author.service';
import { BookService } from 'src/app/services/book/book.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  @ViewChild('bookImage') fileInput: ElementRef<HTMLInputElement> | undefined;
  selectedImagePreviewURL: any = "";
  selectedFile: any;
  authors: any[] = [];
  booksCategory: any[] = [];
  createBookForm: FormGroup;
  formData = new FormData();
  bookId = '';
  defaultImageUrl="/assets/book-2.webp";

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private authorServe: AuthorService,
    private bookServe: BookService,
    private toast: ToastrService,
    private loader: LoaderService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.createBookForm = this.fb.group({
      image: null,
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      author: ['', [Validators.required]],
      code: ['', [Validators.required]],
      preferredYear: ['', [Validators.required]],
      publishedYear: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      totalCount: ['', [Validators.required]],
      price: ['', [Validators.required]],
      edition: ['', [Validators.required]],
    })
    this.bookId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    this.getEditFormValues();
    this.authorList();
    this.getBooksCategory();
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

  // get edit form values
  async getEditFormValues(): Promise<void> {
    try {
      if (this.bookId === '') {
        return;
      }
      this.loader.show();
      const data = await this.bookServe.getBookById(this.bookId);
      if (data.image !== null && data.image !== undefined) {
        this.selectedImagePreviewURL = data?.image.url;
      }
      this.createBookForm.patchValue(data);
    } catch (error) {
      console.log(error);
      this.toast.error('fail to get details')
    } finally {
      this.loader.hide();
    }
  }

  // get author list
  async authorList(): Promise<void> {
    try {
      this.authors = await this.authorServe.getAuthors();
    } catch (error) {
      console.log(error);
      this.toast.error('Fail to fetch authors')
    }
  }
  // get books category
  async getBooksCategory(): Promise<void> {
    try {
      this.booksCategory = await this.bookServe.getBooksCategory();
    } catch (error) {
      console.log(error);
      this.toast.error('Fail to fetch Books Category')
    }
  }

  // on submiting the form
  async createBook(): Promise<void> {
    try {
      // checking image file
      if (this.selectedFile !== undefined) {
        this.updateFormData();
        this.loader.show();

        // checking update form or add form
        if (this.bookId !== '') {
          await this.bookServe.updateBook(this.bookId, this.formData);
          this.toast.success('Updated');
          this.router.navigate(['/books'])
          return;
        }
        await this.bookServe.createBook(this.formData);
        this.toast.success('Created');
        this.router.navigate(['/books'])
        return;
      };
      this.loader.show();

      // checking update form or add form
      if (this.bookId !== '') {
        if (this.selectedImagePreviewURL === '') {
          this.createBookForm.value.image = null;
        }
        await this.bookServe.updateBook(this.bookId, this.createBookForm.value);
        this.toast.success('Updated');
        this.router.navigate(['/books'])
        return;
      }
      await this.bookServe.createBook(this.createBookForm.value);
      this.toast.success('Created');
      this.router.navigate(['/books'])
      return;
    } catch (error: any) {
      this.toast.error(error?.error?.message)
      console.log(error);
    } finally {
      this.loader.hide();
    }
  }

  // update form data
  updateFormData(): void {
    const formValues = this.createBookForm.value;
    Object.entries(formValues).forEach(([key, value]: any) => {
      if (Array.isArray(value)) {
        value.forEach(v => {
          this.formData.append(key, v);
        })
      } else {
        this.formData.append(key, value);
      }
    })
    this.formData.append('image', this.selectedFile);
  }
}
