import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${environment.api}/login/`, data);
  }

  register(data: any) {
    return this.http.post(`${environment.api}/register/`, data);
  }
}
