import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {
  details: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookServe: BookService,
  ) { }

  ngOnInit(): void {
    this.details = this.data.data;
    this.addVisitCount(this.data.data._id)
  }

  async addVisitCount(id: string): Promise<void> {
    try {
      await this.bookServe.bookVisited(id)
    } catch (error) {
      console.log(error);
    }
  }
}
