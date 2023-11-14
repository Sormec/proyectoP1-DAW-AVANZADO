import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloVotarComponent } from './modulo-votar.component';

describe('ModuloVotarComponent', () => {
  let component: ModuloVotarComponent;
  let fixture: ComponentFixture<ModuloVotarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloVotarComponent]
    });
    fixture = TestBed.createComponent(ModuloVotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
