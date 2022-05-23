import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDonantesComponent } from './tabla-donantes.component';

describe('TablaDonantesComponent', () => {
  let component: TablaDonantesComponent;
  let fixture: ComponentFixture<TablaDonantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDonantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDonantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
