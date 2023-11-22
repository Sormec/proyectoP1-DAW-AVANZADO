import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloVerResultadosComponent } from './modulo-ver-resultados.component';

describe('ModuloVerResultadosComponent', () => {
  let component: ModuloVerResultadosComponent;
  let fixture: ComponentFixture<ModuloVerResultadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloVerResultadosComponent]
    });
    fixture = TestBed.createComponent(ModuloVerResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
