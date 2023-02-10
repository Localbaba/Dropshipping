import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './Components/customers/customers.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ExportComponent } from './Components/export/export.component';
import { FieldMappingComponent } from './Components/field-mapping/field-mapping.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ImportComponent } from './Components/import/import.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { OrderComponent } from './Components/order/order.component';
import { PurchaseComponent } from './Components/purchase/purchase.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { SalesChannelComponent } from './Components/sales-channel/sales-channel.component';
import { SalesComponent } from './Components/sales/sales.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ShopifyComponent } from './Components/shopify/shopify.component';
import { WooCommerceComponent } from './Components/woo-commerce/woo-commerce.component';

const routes: Routes = [
  {path:'Customer',component:CustomersComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Export',component:ExportComponent},
  {path:'FieldMapping',component:FieldMappingComponent},
  {path:'Footer',component:FooterComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Import',component:ImportComponent},
  {path:'Inventory',component:InventoryComponent},
  {path:'NavBar',component:NavBarComponent},
  {path:'Order',component:OrderComponent},
  {path:'Purchase',component:PurchaseComponent},
  {path:'Reports',component:ReportsComponent},
  {path:'SalesChannel',component:SalesChannelComponent},
  {path:'Sales',component:SalesComponent},
  {path:'Setting',component:SettingsComponent},
  {path:'Shopify',component:ShopifyComponent},
  {path:'WooCommerce',component:WooCommerceComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
