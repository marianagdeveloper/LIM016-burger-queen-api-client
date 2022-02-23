import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './modules/login/login.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CookControlModule } from './modules/cook-control/cook-control.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';



// Importing forms module
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({

  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    LoginModule,
    CookControlModule,
    NgbModule,
    NgSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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



