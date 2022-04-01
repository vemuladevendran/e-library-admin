import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialsComponent } from './add-materials.component';

describe('AddMaterialsComponent', () => {
  let component: AddMaterialsComponent;
  let fixture: ComponentFixture<AddMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
