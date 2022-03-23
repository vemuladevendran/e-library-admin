import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class IssueBookService {

  constructor(
    private http: HttpClient,
    private settings: SettingsService
  ) { }


  // issue book
  issueBook(data: any): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/book-issue`;
    return lastValueFrom(this.http.post(url, data));
  }

  // get issued books
  getIssuedBooks(): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/book-issue/issued-book-list`;
    return lastValueFrom(this.http.get(url));
  }
}