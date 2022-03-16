import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book/book.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookList: any[] = [];
  constructor(
    private bookServe: BookService,
    private toast: ToastrService,
    private loader: LoaderService
  ) { }

  ngOnInit(): void {
    this.getBookList();
  }

  async getBookList(): Promise<void> {
    try {
      this.loader.show();
      this.bookList = await this.bookServe.getBooks();
    } catch (error: any) {
      console.log(error);
      this.toast.error(error?.message)
    } finally {
      this.loader.hide();
    }
  }

  // delete book
  async deleteBook(e: any): Promise<void> {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await this.bookServe.deleteBook(e);
        this.toast.info('Deleted');
        this.getBookList();
      } catch (error) {
        console.log(error, 'fail to delete');
        this.toast.error('fail to delete')
      }
    }
  }

}
