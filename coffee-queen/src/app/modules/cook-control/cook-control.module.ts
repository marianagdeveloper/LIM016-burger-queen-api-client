import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CookControlComponent } from './cook-control/cook-control.component';

@NgModule({
  declarations: [
    CookControlComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CookControlModule { }
