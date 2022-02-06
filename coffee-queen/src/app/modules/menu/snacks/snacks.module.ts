import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnacksListComponent } from './snacks-list/snacks-list.component';
import { SnacksRoutingModule } from './snacks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



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
