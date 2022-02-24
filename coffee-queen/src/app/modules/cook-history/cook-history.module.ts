import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookHistoryComponent } from './cook-history/cook-history.component';
import { CookHistoryRoutingModule } from './cook-history-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CookHistoryComponent
  ],
  imports: [
    CommonModule,
    CookHistoryRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class CookHistoryModule { }
