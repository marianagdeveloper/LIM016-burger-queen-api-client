import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { OrderListComponent } from './order-list/order-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BrowserModule } from '@angular/platform-browser';

// Importing forms module
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule,
    SharedModule,
    NgbModule,

    ReactiveFormsModule,

  ]
})
export class OrdersModule { }
