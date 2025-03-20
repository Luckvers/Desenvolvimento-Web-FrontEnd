import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoradeIMCComponent } from './calculadorade-imc.component';

describe('CalculadoradeIMCComponent', () => {
  let component: CalculadoradeIMCComponent;
  let fixture: ComponentFixture<CalculadoradeIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoradeIMCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoradeIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
