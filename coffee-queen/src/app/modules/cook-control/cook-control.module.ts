import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CookControlComponent } from './cook-control/cook-control.component';
import { FilterStatusPipe } from './pipes/FilterStatusPipe';


@NgModule({
  declarations: [
    CookControlComponent,
    FilterStatusPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CookControlModule { }
