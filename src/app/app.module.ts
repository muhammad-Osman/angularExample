import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    SharedModule,
    OrdersModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
