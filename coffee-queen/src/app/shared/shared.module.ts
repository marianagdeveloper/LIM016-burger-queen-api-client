import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CardProductComponent } from './components/card/card-product/card-product.component';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderCookComponent } from './components/cook/header-cook/header-cook.component';
import { FooterCookComponent } from './components/cook/footer-cook/footer-cook.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/cook/modal/modal.component';
import { CardOrderComponent } from './components/cook/card-order/card-order.component';



@NgModule({
  declarations: [
    CardProductComponent,
    HeaderCookComponent,
    FooterCookComponent,
    ModalComponent,
    CardOrderComponent
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CardProductComponent,
    HeaderCookComponent,
    FooterCookComponent,
    ModalComponent,
    CardOrderComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {

}
