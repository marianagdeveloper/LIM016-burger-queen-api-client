import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { DrinksRoutingModule } from './drinks-routing.modules';

import { DrinksListComponent } from './drinks-list/drinks-list.component';

@NgModule({
  declarations: [
    DrinksListComponent
  ],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    SharedModule
  ],
})
export class DrinksModule { }
