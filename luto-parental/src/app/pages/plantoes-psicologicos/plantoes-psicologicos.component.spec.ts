import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantoesPsicologicosComponent } from './plantoes-psicologicos.component';

describe('PlantoesPsicologicosComponent', () => {
  let component: PlantoesPsicologicosComponent;
  let fixture: ComponentFixture<PlantoesPsicologicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantoesPsicologicosComponent]
    });
    fixture = TestBed.createComponent(PlantoesPsicologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
