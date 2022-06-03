import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmprendedoresComponent } from './tabla-emprendedores.component';

describe('TablaEmprendedoresComponent', () => {
  let component: TablaEmprendedoresComponent;
  let fixture: ComponentFixture<TablaEmprendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEmprendedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEmprendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
