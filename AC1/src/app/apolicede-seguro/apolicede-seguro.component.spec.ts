import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolicedeSeguroComponent } from './apolicede-seguro.component';

describe('ApolicedeSeguroComponent', () => {
  let component: ApolicedeSeguroComponent;
  let fixture: ComponentFixture<ApolicedeSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolicedeSeguroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApolicedeSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
