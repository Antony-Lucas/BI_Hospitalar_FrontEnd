import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public content: any;

  constructor(
    private userService: UserService,
    private httpClient: HttpClient,
    private storageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.onUserData();
  }

  onUserData() {
    const url = 'http://localhost:8080/api/users/get';
    const token = this.storageService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.get(url, { headers }).subscribe({
      next: (data) => {
        this.content = data;
      },
    });
  }

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
