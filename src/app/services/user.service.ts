import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../models/user-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(studentsNumber: number): Observable<UserResponse> {
    // return this.http.get<UserResponse>('https://randomuser.me/api/?results=' + studentsNumber);
    return this.http.get<UserResponse>(`${environment.apiUrl}?results=${studentsNumber}`);
  }
}
