import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendedorFormComponent } from './emprendedor-form.component';

describe('EmprendedorFormComponent', () => {
  let component: EmprendedorFormComponent;
  let fixture: ComponentFixture<EmprendedorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprendedorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprendedorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
