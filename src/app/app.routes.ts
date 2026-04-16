import { Routes } from '@angular/router';
import { HomesPage } from './tabs/home.page';
import { InfoPage } from './components/info/info.page';
import { StorePage } from './components/store/store.page';
import { ScanPage } from './components/scan/scan.page';
import { EmployeesPage } from './components/employees/employees.page';
import { SettingsPage } from './components/settings/settings.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomesPage,
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
    path: '',
    redirectTo: '/home/scan',
    pathMatch: 'full',
  },
];
