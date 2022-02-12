import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { JuicesRoutingModule } from './juices-routing.module';

import { JuicesListComponent } from './juices-list/juices-list.component';

@NgModule({
  declarations: [
    JuicesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JuicesRoutingModule
  ],
})
export class JuicesModule { }
