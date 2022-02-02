import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkeletonComponent } from './layout/skeleton/skeleton.component';


const routes: Routes = [
  {
    path:'',
  component: SkeletonComponent,
  children: [
    {
    path:'',
    loadChildren:()=>
    import ('./modules/product/product.module').then((m)=> m.ProductModule)
    }
  ]
}
];
//{useHash:true}
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
