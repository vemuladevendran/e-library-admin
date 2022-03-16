import { lastValueFrom } from 'rxjs';
import { SettingsService } from './../settings/settings.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient, private settings: SettingsService) {}

  getStudent(): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/student`;
    return lastValueFrom(this.http.get(url));
  }
}
