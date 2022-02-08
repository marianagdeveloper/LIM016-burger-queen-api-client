import { NgModule } from '@angular/core';
import { CafesListComponent } from './cafes-list/cafes-list.component';
import { CafesRoutingModule } from './cafes-routing.module';
import { ProductService } from 'src/app/data/services/api/product.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CafesListComponent
  ],
/*   providers: [
    ProductService
  ], */
  imports: [
    SharedModule,
    CafesRoutingModule
  ],
 /*  exports: [
    CafesListComponent
  ] */
})
export class CafesModule { }
