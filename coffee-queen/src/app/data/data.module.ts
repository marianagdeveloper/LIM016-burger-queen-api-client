import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FirebaseComponent } from './Firebase/firebase.component';



@NgModule({
  declarations: [

    FirebaseComponent
  ],
  imports: [
CommonModule,
    SharedModule,
  ],

})
export class DataModule { }
