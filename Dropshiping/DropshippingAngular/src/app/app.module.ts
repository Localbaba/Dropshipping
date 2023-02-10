import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SalesComponent } from './Components/sales/sales.component';
import { PurchaseComponent } from './Components/purchase/purchase.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { OrderComponent } from './Components/order/order.component';
//import { CustomerComponent } from './Componets/customer/customer.component';
import { WooCommerceComponent } from './Components/woo-commerce/woo-commerce.component';
import { ShopifyComponent } from './Components/shopify/shopify.component';
import { SalesChannelComponent } from './Components/sales-channel/sales-channel.component';
import { FieldMappingComponent } from './Components/field-mapping/field-mapping.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { ImportComponent } from './Components/import/import.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ExportComponent } from './Components/export/export.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

// import { httpClientModule} 



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SalesComponent,
    PurchaseComponent,
    InventoryComponent,
    OrderComponent,
   // CustomerComponent,
    WooCommerceComponent,
    ShopifyComponent,
    SalesChannelComponent,
    FieldMappingComponent,
    ReportsComponent,
    ImportComponent,
    SettingsComponent,
    ExportComponent,
    CustomersComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
