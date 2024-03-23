import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilharHistoriaComponent } from './compartilhar-historia.component';

describe('CompartilharHistoriaComponent', () => {
  let component: CompartilharHistoriaComponent;
  let fixture: ComponentFixture<CompartilharHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompartilharHistoriaComponent]
    });
    fixture = TestBed.createComponent(CompartilharHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
