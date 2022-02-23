import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookHistoryComponent } from './cook-history/cook-history.component';


const routes: Routes = [
  { path: '',
    component: CookHistoryComponent
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookHistoryRoutingModule {}
