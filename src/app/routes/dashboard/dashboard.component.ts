import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dashboardData } from './dashboard-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  menuData = dashboardData;
  constructor(private router: Router) {}
}
