import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MenuComponent } from './menu/menu/menu.component';


const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'menu', component: MenuComponent},
  {path:'pedidos', component: PedidosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
