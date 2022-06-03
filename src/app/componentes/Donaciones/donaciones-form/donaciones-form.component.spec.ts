import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesFormComponent } from './donaciones-form.component';

describe('DonacionesFormComponent', () => {
  let component: DonacionesFormComponent;
  let fixture: ComponentFixture<DonacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonacionesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
