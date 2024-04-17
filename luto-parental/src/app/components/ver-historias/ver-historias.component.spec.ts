import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHistoriasComponent } from './ver-historias.component';

describe('VerHistoriasComponent', () => {
  let component: VerHistoriasComponent;
  let fixture: ComponentFixture<VerHistoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerHistoriasComponent]
    });
    fixture = TestBed.createComponent(VerHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
