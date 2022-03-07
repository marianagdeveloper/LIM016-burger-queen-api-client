import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { LoginUserComponent } from './modules/login/login-user/login-user.component';
import { ControlComponent } from './modules/order-control/control/control.component';

import {AuthGuard} from './guard/auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginUserComponent,
  },
  {
    path:'',
    component: SkeletonComponent,
    children: [
      {
        path:'product',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/product/product.module').then((m)=> m.ProductModule)
      },
      {
        path:'cafes',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/menu/cafes/cafes.module').then((m)=> m.CafesModule)
      },
      {
        path:'snacks',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/menu/snacks/snacks.module').then((m)=> m.SnacksModule)
      },
      {
        path:'desserts',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/menu/desserts/desserts.module').then((m)=> m.DessertsModule)
      },
      {
        path:'drinks',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/menu/drinks/drinks.module').then((m)=> m.DrinksModule)
      },
      {
        path:'burgers',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/menu/burgers/burgers.module').then((m)=> m.BurgersModule)
      },
      {
        path:'juices',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/menu/juices/juices.module').then((m)=> m.JuicesModule)
      },
      {
        path:'order-control',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/order-control/order-control.module').then((m)=> m.OrderControlModule),
      },
      {
        path:'orders',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/orders/orders.module').then((m)=> m.OrdersModule)
      },
      {
        path:'products-control',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/products-control/products-control.module').then((m)=> m.ProductsControlModule)
      },
      {
        path:'users-control',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/users-control/users-control.module').then((m)=> m.UsersControlModule)
      },
      {
        path:'cook-control',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/cook-control/cook-control.module').then((m)=> m.CookControlModule)
      },
      {
        path:'cook-history',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/cook-history/cook-history.module').then((m)=> m.CookHistoryModule)
      },
      {
        path:'sales',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/orders-history/orders-history.module').then((m)=> m.OrdersHistoryModule)
      },
      {
        path:'order-control-admin',
        canActivate:[AuthGuard],
        loadChildren:()=>
        import ('./modules/order-control-admin/order-control-admin.module').then((m)=> m.OrderControlAdminModule)
      }
    /*   {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
      } */
      ]
  }
 /*  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  } */
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
