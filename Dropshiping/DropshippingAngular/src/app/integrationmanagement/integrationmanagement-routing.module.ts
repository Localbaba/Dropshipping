import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegrationmanagementComponent } from './integrationmanagement.component';

const routes: Routes = [
  {
    path: '',
    component:IntegrationmanagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationmanagementRoutingModule { }
