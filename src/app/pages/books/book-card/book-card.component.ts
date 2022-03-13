import { Component, Input, OnInit } from '@angular/core';
import { ViewBookComponent } from '../view-book/view-book.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() bookList: any[] = [];
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }


  // opening view dialog
  openDialog(data: any) {
    const dialogRef = this.dialog.open(ViewBookComponent, {
      width: '500px',
      height: '350px',
      panelClass: 'zero-padding-panel',
      data: {
        data
      }
    });
  }

}
