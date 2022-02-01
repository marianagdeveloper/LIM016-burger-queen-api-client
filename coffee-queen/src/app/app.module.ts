import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { DesayunoComponent } from './menu/desayuno/desayuno.component';
import { HeaderComponent } from './header/header.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

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
