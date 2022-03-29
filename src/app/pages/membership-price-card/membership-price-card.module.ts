import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipPriceCardRoutingModule } from './membership-price-card-routing.module';
import { MembershipPriceCardComponent } from './membership-price-card.component';


@NgModule({
  declarations: [
    MembershipPriceCardComponent
  ],
  imports: [
    CommonModule,
    MembershipPriceCardRoutingModule
  ]
})
export class MembershipPriceCardModule { }
