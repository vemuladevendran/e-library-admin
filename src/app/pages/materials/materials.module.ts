import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';
import { AddMaterialsComponent } from './add-materials/add-materials.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
]
@NgModule({
  declarations: [
    MaterialsComponent,
    AddMaterialsComponent,
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    ReactiveFormsModule,
    PdfViewerModule,
    ...materialModules,
  ]
})
export class MaterialsModule { }
