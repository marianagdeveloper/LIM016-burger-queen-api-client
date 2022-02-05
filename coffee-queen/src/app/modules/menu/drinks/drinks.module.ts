import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinksListComponent } from './drinks-list/drinks-list.component';
import { DrinksRoutingModule } from './drinks-routing.modules';
import { SharedModule } from './../../../shared/shared.module';



@NgModule({
  declarations: [
    DrinksListComponent
  ],
  imports: [
CommonModule,
    DrinksRoutingModule,
    SharedModule
  ],
 /*  exports: [
    DrinksListComponent
  ] */
})
export class DrinksModule { }
