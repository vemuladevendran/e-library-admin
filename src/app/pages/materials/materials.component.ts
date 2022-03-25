import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { MaterialsService } from 'src/app/services/materials/materials.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  materialsList: any[] = [];

  constructor(
    private materialServe: MaterialsService,
    private loader: LoaderService,
    private toast: ToastrService,
  ) { }


  // materials list
  async getMaterials(): Promise<void> {
    try {
      this.loader.show();
      this.materialsList = await this.materialServe.getMaterials();
    } catch (error: any) {
      console.log(error);
      this.toast.error(error?.error.message);
    }
    finally {
      this.loader.hide();
    }
  }

  ngOnInit(): void {
    this.getMaterials();
  }

}
