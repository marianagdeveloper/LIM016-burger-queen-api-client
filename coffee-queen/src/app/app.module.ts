import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { DesayunoComponent } from './menu/desayuno/desayuno.component';
import { HeaderComponent } from './layout/header/header.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MenuListComponent,
    DesayunoComponent,
    HeaderComponent,
    PedidosComponent,
    BienvenidaComponent,
    SkeletonComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
  BrowserModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
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
