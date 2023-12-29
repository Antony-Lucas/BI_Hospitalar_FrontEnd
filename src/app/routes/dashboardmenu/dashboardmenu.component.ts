import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardmenu',
  templateUrl: './dashboardmenu.component.html',
  styleUrl: './dashboardmenu.component.css',
})
export class DashboardmenuComponent {
  avaliableData: boolean = false;
  hasNoData: boolean = true;
  data: any;
  constructor(private router: Router) {
    this.verifyData();
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
