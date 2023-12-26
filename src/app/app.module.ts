import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authInterceptorProviders } from './_helpers/http-interceptor.service';
import { BodyComponent } from './sidenavbar/body/body.component';
import { SidenavComponent } from './sidenavbar/sidenav/sidenav.component';
import { DashboardComponent } from './sidenavbar/dashboard/dashboard.component';
import { GraphComponent } from './sidenavbar/graph/graph.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { UpsidenavComponent } from './sidenavbar/upsidenav/upsidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    GraphComponent,
    UpsidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [provideClientHydration(), authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
