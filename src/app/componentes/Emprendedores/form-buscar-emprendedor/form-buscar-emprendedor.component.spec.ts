import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscarEmprendedorComponent } from './form-buscar-emprendedor.component';

describe('FormBuscarEmprendedorComponent', () => {
  let component: FormBuscarEmprendedorComponent;
  let fixture: ComponentFixture<FormBuscarEmprendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuscarEmprendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuscarEmprendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
