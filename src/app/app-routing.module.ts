import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { GraphmenuComponent } from './routes/graphmenu/graphmenu.component';
import { AtendimentosComponent } from './routes/charts/atendimentos/atendimentos.component';
import { DashboardmenuComponent } from './routes/dashboardmenu/dashboardmenu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'dashboardmenu',
        component: DashboardmenuComponent,
      },
      {
        path: 'graphmenu',
        component: GraphmenuComponent,
        children: [],
      },
      {
        path: 'atendimentos',
        component: AtendimentosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
