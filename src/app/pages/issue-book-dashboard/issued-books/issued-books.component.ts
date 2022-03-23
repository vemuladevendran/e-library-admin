import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IssueBookService } from 'src/app/services/issue-book/issue-book.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.scss']
})
export class IssuedBooksComponent implements OnInit {

  constructor(
    private bookIssueServe: IssueBookService,
    private toast: ToastrService,
    private loader: LoaderService
  ) { }

  async getBooks(): Promise<void> {
    try {
      this.loader.show();
      const data = await this.bookIssueServe.getIssuedBooks();
      console.log(data);
    } catch (error: any) {
      console.log(error);
      this.toast.error(error?.error.messge)
    } finally {
      this.loader.hide();
    }
  }

  ngOnInit(): void {
    this.getBooks();
  }

}
