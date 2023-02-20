import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { DownloadModule } from '@carbon/icons-angular';
import { CustomerModule } from '../app/customer/customer.module';
import { DashboardModule } from '../app/dashboard/dashboard.module';
import { IntegrationmanagementModule } from '../app/integrationmanagement/integrationmanagement.module';


import { PurchaseModule } from '../app/purchase/purchase.module';
import { SaleModule } from '../app/sale/sale.module';
import { SharedModule } from '../app/shared/shared.module';

import { SigninModule } from '../app/signin/signin.module';



const routes: Routes = [
  {
    path: 'login',
    // canActivate: [AuthGuard], // AUTH GUARD IS GREAT
    loadChildren: () =>
      import('../app/signin/signin.module').then((m) => SigninModule),
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard], // AUTH GUARD IS GREAT
    loadChildren: () =>
      import('../app/dashboard/dashboard.module').then((m) => DashboardModule),
  },
  {
    path: 'sales',
    // canActivate: [AuthGuard], // AUTH GUARD IS GREAT
    loadChildren: () =>
      import('../app/sale/sale.module').then((m) => SaleModule),
  },
  {
    path: 'purchase',
    // canActivate: [AuthGuard], // AUTH GUARD IS GREAT
    loadChildren: () =>
      import('../app/purchase/purchase.module').then((m) => PurchaseModule),
  },
 
  {
    path: 'customers',
    // canActivate: [AuthGuard], // AUTH GUARD IS GREAT
    loadChildren: () =>
      import('../app/customer/customer.module').then((m) => CustomerModule),
  },
  {
    path: '',
    // canActivate: [AuthGuard], // AUTH GUARD IS GREAT
    loadChildren: () =>
      import('../app/integrationmanagement/integrationmanagement.module').then((m) => IntegrationmanagementModule),
  },
  {
    path: 'shared',
    // canActivate: [AuthGuard], // AUTH GUARD IS GREAT
    loadChildren: () =>
      import('../app/shared/shared.module').then((m) => SharedModule),
  },
  {
    path: 'app',
    data:{
      breadcrumb: 'Home'
    },
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/app/dashboard/default',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
