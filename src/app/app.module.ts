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
import { BodyComponent } from './routes/body/body.component';
import { SidenavComponent } from './sidenavbar/sidenav/sidenav.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { UpsidenavComponent } from './sidenavbar/upsidenav/upsidenav.component';
import { GraphmenuComponent } from './routes/graphmenu/graphmenu.component';
import { AtendimentosComponent } from './routes/charts/atendimentos/atendimentos.component';
import { DashboardmenuComponent } from './routes/dashboardmenu/dashboardmenu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    UpsidenavComponent,
    GraphmenuComponent,
    AtendimentosComponent,
    DashboardmenuComponent,
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
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [provideClientHydration(), authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
