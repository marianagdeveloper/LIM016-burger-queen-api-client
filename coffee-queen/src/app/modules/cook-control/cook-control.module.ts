import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CookControlComponent } from './cook-control/cook-control.component';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { CookControlRoutingModule } from './cook-control-routing.module';
import { CookPendingComponent } from './cook-pending/cook-pending.component';
import { CookDeliveringComponent } from './cook-delivering/cook-delivering.component';
import { CookCanceledComponent } from './cook-canceled/cook-canceled.component';



@NgModule({
  declarations: [
    CookControlComponent,
    FilterStatusPipe,
    CookPendingComponent,
    CookDeliveringComponent,
    CookCanceledComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CookControlRoutingModule
  ]
})
export class CookControlModule { }
