import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { LoginUserComponent } from './modules/login/login-user/login-user.component';



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
        loadChildren:()=>
        import ('./modules/product/product.module').then((m)=> m.ProductModule)
      },
      {
        path:'cafes',
        loadChildren:()=>
        import ('./modules/menu/cafes/cafes.module').then((m)=> m.CafesModule)
      },
      {
        path:'snacks',
        loadChildren:()=>
        import ('./modules/menu/snacks/snacks.module').then((m)=> m.SnacksModule)
      },
      {
        path:'desserts',
        loadChildren:()=>
        import ('./modules/menu/desserts/desserts.module').then((m)=> m.DessertsModule)
      },
      {
        path:'drinks',
        loadChildren:()=>
        import ('./modules/menu/drinks/drinks.module').then((m)=> m.DrinksModule)
      },
      {
        path:'burgers',
        loadChildren:()=>
        import ('./modules/menu/burgers/burgers.module').then((m)=> m.BurgersModule)
      },
      {
        path:'juices',
        loadChildren:()=>
        import ('./modules/menu/juices/juices.module').then((m)=> m.JuicesModule)
      },
      {
        path:'order-control',
        loadChildren:()=>
        import ('./modules/order-control/order-control.module').then((m)=> m.OrderControlModule)
      },
      {
        path:'orders',
        loadChildren:()=>
        import ('./modules/orders/orders.module').then((m)=> m.OrdersModule)
      },
      {
        path:'products-control',
        loadChildren:()=>
        import ('./modules/products-control/products-control.module').then((m)=> m.ProductsControlModule)
      },
      {
        path:'users-control',
        loadChildren:()=>
        import ('./modules/users-control/users-control.module').then((m)=> m.UsersControlModule)
      },
      {
        path:'cook',
        loadChildren:()=>
        import ('./modules/cook-control/cook-control.module').then((m)=> m.CookControlModule)
      },
      {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
      }
      ]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
