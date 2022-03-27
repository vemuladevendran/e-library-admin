import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassedOutComponent } from './passed-out.component';

const routes: Routes = [{ path: '', component: PassedOutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassedOutRoutingModule { }
