import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './services/api/product.service';


@NgModule({
  declarations: [
  ],
  providers: [
    ProductService
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class DataModule { }
