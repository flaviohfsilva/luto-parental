import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenciasComponent } from './assistencias.component';

describe('AssistenciasComponent', () => {
  let component: AssistenciasComponent;
  let fixture: ComponentFixture<AssistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistenciasComponent]
    });
    fixture = TestBed.createComponent(AssistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
