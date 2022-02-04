import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafesListComponent } from './cafes-list/cafes-list.component';
import { CafesRoutingModule } from './cafes-routing.module';



@NgModule({
  declarations: [
    CafesListComponent
  ],
  imports: [
    CommonModule,
    CafesRoutingModule
  ],
  exports: [
    CafesListComponent
  ]
})
export class CafesModule { }
