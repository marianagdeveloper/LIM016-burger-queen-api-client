import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HeaderComponent } from './layout/header/header.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProductModule } from './modules/product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './modules/login/login.module';

@NgModule({
 
  declarations: [
    AppComponent,
    HeaderComponent,
    SkeletonComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
  BrowserModule,
    CoreModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
