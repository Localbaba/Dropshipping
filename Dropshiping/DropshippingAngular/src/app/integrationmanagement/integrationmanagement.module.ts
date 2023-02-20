import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationmanagementRoutingModule } from './integrationmanagement-routing.module';
import { IntegrationmanagementComponent } from './integrationmanagement.component';


@NgModule({
  declarations: [
    IntegrationmanagementComponent
  ],
  imports: [
    CommonModule,
    IntegrationmanagementRoutingModule
  ]
})
export class IntegrationmanagementModule { }
