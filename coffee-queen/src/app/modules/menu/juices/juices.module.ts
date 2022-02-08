import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuicesListComponent } from './juices-list/juices-list.component';
import { ProductService } from 'src/app/data/services/api/product.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { JuicesRoutingModule } from './juices-routing.module';



@NgModule({
  declarations: [
    JuicesListComponent
  ],
  imports: [
    SharedModule,
    JuicesRoutingModule
  ],
})
export class JuicesModule { }
