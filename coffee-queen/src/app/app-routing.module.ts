import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';


const routes: Routes = [
  {path:'',component: BienvenidaComponent},
  {path:'login', component: LoginComponent},
  {path:'menu', component: MenuComponent},
  {path:'pedidos', component: PedidosComponent},

];
//{useHash:true}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
