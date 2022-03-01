import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { DessertsRoutingModule } from './desserts-routing.module';

import { DessertsListComponent } from './desserts-list/desserts-list.component';

@NgModule({
  declarations: [
    DessertsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DessertsRoutingModule
  ]
})
export class DessertsModule { }
