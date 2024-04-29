import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaSelecionadaComponent } from './noticia-selecionada.component';

describe('NoticiaSelecionadaComponent', () => {
  let component: NoticiaSelecionadaComponent;
  let fixture: ComponentFixture<NoticiaSelecionadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaSelecionadaComponent]
    });
    fixture = TestBed.createComponent(NoticiaSelecionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
