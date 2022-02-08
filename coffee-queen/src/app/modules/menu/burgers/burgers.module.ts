import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgersRoutingModule } from './burgers-routing.modules';
import { SharedModule } from 'src/app/shared/shared.module';

import { BurgersListComponent } from './burgers-list/burgers-list.component';


@NgModule({
  declarations: [
    BurgersListComponent,
  ],
  imports: [
    CommonModule,
    BurgersRoutingModule,
    SharedModule,
  ],
})
export class BurgersModule { }
