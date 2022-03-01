import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SnacksRoutingModule } from './snacks-routing.module';

import { SnacksListComponent } from './snacks-list/snacks-list.component';

@NgModule({
  declarations: [
    SnacksListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SnacksRoutingModule
  ]
})
export class SnacksModule { }
