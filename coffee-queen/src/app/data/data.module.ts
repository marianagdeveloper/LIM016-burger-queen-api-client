import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './services/api/product.service';
import { FirebaseComponent } from './Firebase/firebase.component';



@NgModule({
  declarations: [
  
    FirebaseComponent
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
