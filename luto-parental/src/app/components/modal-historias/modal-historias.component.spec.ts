import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHistoriasComponent } from './modal-historias.component';

describe('ModalHistoriasComponent', () => {
  let component: ModalHistoriasComponent;
  let fixture: ComponentFixture<ModalHistoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHistoriasComponent]
    });
    fixture = TestBed.createComponent(ModalHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
