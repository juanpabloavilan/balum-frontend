import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDonacionesComponent } from './tabla-donaciones.component';

describe('TablaDonacionesComponent', () => {
  let component: TablaDonacionesComponent;
  let fixture: ComponentFixture<TablaDonacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDonacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
