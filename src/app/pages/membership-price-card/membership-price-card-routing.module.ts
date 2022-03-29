import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembershipPriceCardComponent } from './membership-price-card.component';

const routes: Routes = [{ path: '', component: MembershipPriceCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipPriceCardRoutingModule { }
