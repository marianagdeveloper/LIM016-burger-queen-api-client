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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MenuListComponent,
    DesayunoComponent,
    HeaderComponent,
    PedidosComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
