import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${environment.api}/login/`, data);
  }

  register(data: any) {
    return this.http.post(`${environment.api}/register/`, data);
  }

  user() {
    return this.http.get(`${environment.api}/user`);
  }

  logout() {
    return this.http.post(`${environment.api}/logout/}`, {});
  }
}
