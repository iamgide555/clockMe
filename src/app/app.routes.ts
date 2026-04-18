import { Routes } from '@angular/router';
import { authGuard } from './commons/auth/auth-guard';
import { HomesPage } from './home/home.page';
import { InfoPage } from './components/info/info.page';
import { StorePage } from './components/store/store.page';
import { ScanPage } from './components/scan/scan.page';
import { EmployeesPage } from './components/employees/employees.page';
import { SettingsPage } from './components/settings/settings.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomesPage,
    canActivate: [authGuard],
    children: [
      {
        path: 'info',
        component: InfoPage,
      },
      {
        path: 'store',
        component: StorePage,
      },
      {
        path: 'scan',
        component: ScanPage,
      },
      {
        path: 'employees',
        component: EmployeesPage,
      },
      {
        path: 'settings',
        component: SettingsPage,
      },
      {
        path: '',
        redirectTo: '/home/scan',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
