import { lastValueFrom } from 'rxjs';
import { SettingsService } from './../settings/settings.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient, private settings: SettingsService) { }

  getStudents(filters?: any): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/student`;
    return lastValueFrom(this.http.get(url, {
      params: filters,
    }));
  }

  getStudentById(id: string): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/student/${id}`;
    return lastValueFrom(this.http.get(url));
  }

  createStudent(data: any): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/student`;
    return lastValueFrom(this.http.post(url, data));
  }

  updateStudent(data: any, id: string): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/student/${id}`;
    return lastValueFrom(this.http.put(url, data));
  }

  deleteStudent(id: string): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/student/${id}`;
    return lastValueFrom(this.http.delete(url));
  }
}
