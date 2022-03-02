import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './services/api/product.service';
import { FirebaseComponent } from './Firebase/firebase.component';
import { UsersService } from './services/api/users.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/interceptor/auth.interceptor';



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
