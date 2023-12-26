import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  form: any = {
    userName: null,
    passWord: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: TokenStorageService,
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    if (this.storageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onTest() {
    this.userService.getAdminBoard().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  onSubmit(): void {
    const { userName, passWord } = this.form;

    console.log({ userName, passWord });
    this.authService.login(userName, passWord).subscribe({
      next: (data) => {
        this.storageService.saveToken(data.token);
        this.storageService.saveRefreshToken(data.refreshToken);
        this.storageService.saveUser(data);

        this.onTest();
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log(this.storageService.getRefreshToken());
        console.log(this.storageService.getToken());
        this.onLogin(this.isLoggedIn);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }

  onLogin(isLoggedIn: Boolean) {
    if (isLoggedIn) {
      this.router.navigateByUrl('/home');
    }
  }
}
