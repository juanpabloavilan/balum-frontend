import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonanteFormComponent } from './donante-form.component';

describe('DonanteFormComponent', () => {
  let component: DonanteFormComponent;
  let fixture: ComponentFixture<DonanteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonanteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
