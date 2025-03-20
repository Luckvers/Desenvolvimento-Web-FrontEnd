import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversordeTemperaturaComponent } from './conversorde-temperatura.component';

describe('ConversordeTemperaturaComponent', () => {
  let component: ConversordeTemperaturaComponent;
  let fixture: ComponentFixture<ConversordeTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversordeTemperaturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversordeTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
