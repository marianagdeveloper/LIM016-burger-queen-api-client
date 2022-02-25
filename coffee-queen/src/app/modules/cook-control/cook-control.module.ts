import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CookControlComponent } from './cook-control/cook-control.component';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { CookControlRoutingModule } from './cook-control-routing.module';



@NgModule({
  declarations: [
    CookControlComponent,
    FilterStatusPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    CookControlRoutingModule
  ]
})
export class CookControlModule { }
