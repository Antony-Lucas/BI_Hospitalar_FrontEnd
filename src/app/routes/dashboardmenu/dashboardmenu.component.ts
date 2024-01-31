import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-dashboardmenu',
  templateUrl: './dashboardmenu.component.html',
  styleUrl: './dashboardmenu.component.css',
})
export class DashboardmenuComponent implements OnInit {
  form: any = {
    fullUserName: null,
    cargo: null,
    email: null,
    userName: null,
    passWord: null,
    role: null,
  };
  avaliableData: boolean = false;
  hasNoData: boolean = true;
  data: any;
  roles: string[] = [];
  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: TokenStorageService
  ) {
    this.verifyData();
  }

  ngOnInit(): void {
    if (this.storageService.getToken()) {
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { fullUserName, cargo, email, userName, passWord, role } = this.form;

    console.log({ fullUserName, cargo, email, userName, passWord, role });
    this.authService
      .register(fullUserName, cargo, email, userName, passWord, role)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  onBackToDashboardMenu() {
    this.router.navigateByUrl('/home/dashboard');
  }

  verifyData(): void {
    if (this.data && this.data.length > 0) {
      this.avaliableData = true;
      this.hasNoData = false;
      console.log(this.data);
    } else {
      this.avaliableData = false;
      this.hasNoData = true;
    }
  }
}
