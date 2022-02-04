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
        path:'juices',
        loadChildren:()=>
        import ('./modules/menu/juices/juices.module').then((m)=> m.JuicesModule)
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
//{useHash:true}
@NgModule({
  imports: [RouterModule.forRoot(routes,/* {useHash:true} */)],
exports: [RouterModule]
})
export class AppRoutingModule { }
