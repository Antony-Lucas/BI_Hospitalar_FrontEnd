import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API, USERS_API } from '../_environments/environments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userName: string, passWord: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        userName,
        passWord,
      },
      httpOptions
    );
  }

  register(
    fullUserName: string,
    cargo: string,
    email: string,
    userName: string,
    passWord: string,
    role: string
  ): Observable<any> {
    return this.http.post(
      USERS_API + 'signup',
      {
        fullUserName,
        cargo,
        email,
        userName,
        passWord,
        role: [role],
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }

  refreshToken(token: string) {
    return this.http.post(
      AUTH_API + 'refreshtoken',
      { refreshToken: token },
      httpOptions
    );
  }
}
