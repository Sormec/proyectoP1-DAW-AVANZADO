import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloConteoComponent } from './modulo-conteo.component';

describe('ModuloConteoComponent', () => {
  let component: ModuloConteoComponent;
  let fixture: ComponentFixture<ModuloConteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloConteoComponent]
    });
    fixture = TestBed.createComponent(ModuloConteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
