import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';
import { AddMaterialsComponent } from './add-materials/add-materials.component';


@NgModule({
  declarations: [
    MaterialsComponent,
    AddMaterialsComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule
  ]
})
export class MaterialsModule { }
